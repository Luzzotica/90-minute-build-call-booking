"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import Button from "./Button";
import ProgressBar from "./ProgressBar";
import ContactStep from "./steps/ContactStep";
import RevenueStep, { isQualified } from "./steps/RevenueStep";
import ProblemStep from "./steps/ProblemStep";
import { saveContactToGHL } from "@/lib/ghl";

export interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  revenue: string;
  problem: string;
}

const TOTAL_STEPS = 3;

export default function QualificationForm() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    trigger,
    formState: { errors },
    getValues,
  } = useForm<FormData>({
    mode: "onChange",
  });

  const validateCurrentStep = async (): Promise<boolean> => {
    switch (step) {
      case 1:
        return await trigger(["firstName", "lastName", "email", "phone"]);
      case 2:
        return await trigger("revenue");
      case 3:
        return await trigger("problem");
      default:
        return true;
    }
  };

  const handleNext = async () => {
    const isValid = await validateCurrentStep();
    if (!isValid) return;

    // After contact step, save to GHL
    if (step === 1) {
      setIsSubmitting(true);
      const values = getValues();
      await saveContactToGHL({
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        phone: values.phone,
      });
      setIsSubmitting(false);
    }

    // After revenue step, check qualification
    if (step === 2) {
      const revenue = getValues("revenue");
      if (!isQualified(revenue)) {
        // Save what we have and redirect to not-ready page
        setIsSubmitting(true);
        const values = getValues();
        await saveContactToGHL({
          firstName: values.firstName,
          lastName: values.lastName,
          email: values.email,
          phone: values.phone,
          revenue: values.revenue,
        });
        setIsSubmitting(false);
        router.push("/not-ready");
        return;
      }
    }

    setStep((prev) => Math.min(prev + 1, TOTAL_STEPS));
  };

  const handleBack = () => {
    setStep((prev) => Math.max(prev - 1, 1));
  };

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    // Final save with all data
    await saveContactToGHL({
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phone: data.phone,
      revenue: data.revenue,
      problem: data.problem,
    });

    // Store data in sessionStorage for the booking page
    if (typeof window !== "undefined") {
      sessionStorage.setItem("qualificationData", JSON.stringify(data));
    }

    setIsSubmitting(false);
    router.push("/book");
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return <ContactStep register={register} errors={errors} />;
      case 2:
        return <RevenueStep register={register} watch={watch} errors={errors} />;
      case 3:
        return <ProblemStep register={register} errors={errors} />;
      default:
        return null;
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-lg mx-auto">
      <ProgressBar currentStep={step} totalSteps={TOTAL_STEPS} />
      
      <div className="bg-card rounded-2xl shadow-xl shadow-foreground/5 p-6 md:p-8 border border-border">
        {renderStep()}

        <div className="flex justify-between mt-8 pt-6 border-t border-border">
          {step > 1 ? (
            <Button
              type="button"
              variant="outline"
              onClick={handleBack}
              disabled={isSubmitting}
            >
              Back
            </Button>
          ) : (
            <div />
          )}

          {step < TOTAL_STEPS ? (
            <Button
              type="button"
              onClick={handleNext}
              isLoading={isSubmitting}
            >
              Continue
            </Button>
          ) : (
            <Button type="submit" isLoading={isSubmitting}>
              Book Your Session
            </Button>
          )}
        </div>
      </div>
    </form>
  );
}

