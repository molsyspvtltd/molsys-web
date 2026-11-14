const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbwoPS2cXYWBbVXK2trvYteR-MAMsaw7NqbOkoJiCOaqTGB7oeOJxRiQ-QDKPj54EU4e/exec";

export async function submitMargOncoFeedback(formData) {
  if (!SCRIPT_URL) {
    throw new Error(
      "The feedback form is not configured yet. Please contact the Molsys team.",
    );
  }

  const payload = {
    ...formData,
    interests: Array.isArray(formData.interests) ? formData.interests : [],
    pitchDeckContact: Array.isArray(formData.pitchDeckContact)
      ? formData.pitchDeckContact.join(", ")
      : formData.pitchDeckContact,
    source: "Molsys Website - Marg-Onco Feedback",
    pageUrl: window.location.href,
    submittedAtClient: new Date().toISOString(),
  };

  // text/plain is a CORS-safelisted content type and avoids a preflight request.
  // Apps Script's browser response may be opaque, so the client cannot inspect
  // the spreadsheet write result. Network-level failures are still caught.
  try {
    await fetch(SCRIPT_URL, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify(payload),
    });
  } catch (error) {
    throw new Error("Unable to reach Google Sheets. Please try again.");
  }
}
