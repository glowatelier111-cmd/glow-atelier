const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

export const WEB3FORMS_KEYS = {
  contact: "4f422031-ddae-4fa0-a23c-fc78e842f6c5",
  reservation: "8f97ef20-d168-4cdd-9167-c170eaf4c8cd",
};

export async function submitToWeb3Forms(formElement, accessKey) {
  const formData = new FormData(formElement);
  formData.append("access_key", accessKey);

  const response = await fetch(WEB3FORMS_ENDPOINT, {
    method: "POST",
    body: formData,
    headers: { Accept: "application/json" },
  });

  const result = await response.json();
  return result.success === true;
}
