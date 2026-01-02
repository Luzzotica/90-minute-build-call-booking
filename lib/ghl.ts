"use server";

export interface ContactData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  revenue?: string;
  problem?: string;
}

interface GHLContact {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

export async function saveContactToGHL(data: ContactData): Promise<{ success: boolean; contactId?: string; error?: string }> {
  const apiKey = process.env.GHL_API_KEY;
  const locationId = process.env.GHL_LOCATION_ID;

  if (!apiKey) {
    console.error("GHL_API_KEY is not set");
    return { success: false, error: "API key not configured" };
  }

  try {
    // First, check if contact already exists by email
    const searchResponse = await fetch(
      `https://services.leadconnectorhq.com/contacts/?locationId=${locationId}&query=${encodeURIComponent(data.email)}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
          Version: "2021-07-28",
        },
      }
    );

    let contactId: string | undefined;
    
    if (searchResponse.ok) {
      const searchData = await searchResponse.json();
      const existingContact = searchData.contacts?.find(
        (c: GHLContact) => c.email?.toLowerCase() === data.email.toLowerCase()
      );
      if (existingContact) {
        contactId = existingContact.id;
      }
    }

    // Build custom fields for qualification data
    const customFields: { key: string; value: string }[] = [];
    if (data.revenue) {
      customFields.push({ key: "monthly_revenue", value: data.revenue });
    }
    if (data.problem) {
      customFields.push({ key: "sales_challenge", value: data.problem });
    }

    if (contactId) {
      // Update existing contact - don't include locationId in update payload
      const updatePayload = {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        phone: data.phone,
        source: "90-Minute Build Qualification",
        tags: ["90-minute-build", "qualification-flow"],
        ...(customFields.length > 0 && { customFields }),
      };

      const updateResponse = await fetch(
        `https://services.leadconnectorhq.com/contacts/${contactId}`,
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
            Version: "2021-07-28",
          },
          body: JSON.stringify(updatePayload),
        }
      );

      if (!updateResponse.ok) {
        const errorData = await updateResponse.json();
        console.error("GHL update error:", errorData);
        return { success: false, error: "Failed to update contact" };
      }

      return { success: true, contactId };
    } else {
      // Create new contact - locationId is required for creation
      const createPayload = {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        phone: data.phone,
        locationId: locationId,
        source: "90-Minute Build Qualification",
        tags: ["90-minute-build", "qualification-flow"],
        ...(customFields.length > 0 && { customFields }),
      };

      const createResponse = await fetch(
        "https://services.leadconnectorhq.com/contacts/",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
            Version: "2021-07-28",
          },
          body: JSON.stringify(createPayload),
        }
      );

      if (!createResponse.ok) {
        const errorData = await createResponse.json();
        console.error("GHL create error:", errorData);
        return { success: false, error: "Failed to create contact" };
      }

      const result = await createResponse.json();
      return { success: true, contactId: result.contact?.id };
    }
  } catch (error) {
    console.error("GHL API error:", error);
    return { success: false, error: "Network error" };
  }
}

export async function updateContactQualification(
  email: string,
  data: Partial<ContactData>
): Promise<{ success: boolean; error?: string }> {
  // This is a convenience wrapper that re-saves with updated fields
  // In a production app, you might want to store the contactId in session
  // and update directly
  const fullData: ContactData = {
    firstName: "",
    lastName: "",
    email,
    phone: "",
    ...data,
  };
  
  const result = await saveContactToGHL(fullData);
  return { success: result.success, error: result.error };
}

