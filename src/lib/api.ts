export type PredictionResponse = {
  label: "REAL" | "FAKE";
  confidence: number;
  probability_real: number;
};

const apiBaseUrl = (import.meta.env.VITE_API_BASE_URL || "").replace(/\/$/, "");
const apiPredictPath = import.meta.env.VITE_API_PREDICT_PATH || "/api/predict";

function buildPredictUrl(): string {
  if (/^https?:\/\//i.test(apiPredictPath)) {
    return apiPredictPath;
  }

  const normalizedPath = apiPredictPath.startsWith("/")
    ? apiPredictPath
    : `/${apiPredictPath}`;

  return apiBaseUrl ? `${apiBaseUrl}${normalizedPath}` : normalizedPath;
}

function parseApiError(status: number, payload: unknown): string {
  if (
    payload &&
    typeof payload === "object" &&
    "detail" in payload &&
    typeof payload.detail === "string"
  ) {
    return payload.detail;
  }

  return `Request failed with status ${status}.`;
}

export async function detectFakeFace(file: File): Promise<PredictionResponse> {
  const formData = new FormData();
  formData.append("image", file);

  const response = await fetch(buildPredictUrl(), {
    method: "POST",
    body: formData,
  });

  const payload: unknown = await response.json().catch(() => null);

  if (!response.ok) {
    throw new Error(parseApiError(response.status, payload));
  }

  if (
    !payload ||
    typeof payload !== "object" ||
    !("label" in payload) ||
    !("confidence" in payload) ||
    !("probability_real" in payload)
  ) {
    throw new Error("Invalid API response format.");
  }

  return payload as PredictionResponse;
}
