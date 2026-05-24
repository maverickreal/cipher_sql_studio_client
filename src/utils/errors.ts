export const getErrorMessage = (err: unknown, defaultMsg: string): string => {
  if (err && typeof err === "object" && "data" in err) {
    const errorData = (err as { data: unknown }).data;
    if (errorData && typeof errorData === "object" && "error" in errorData) {
      return String((errorData as { error: unknown }).error);
    }
    if (errorData && typeof errorData === "object" && "message" in errorData) {
      return String((errorData as { message: unknown }).message);
    }
    if (typeof errorData === "string") {
      return errorData;
    }
  }

  if (err && typeof err === "object" && "message" in err) {
    return String((err as { message: unknown }).message);
  }

  return defaultMsg;
};
