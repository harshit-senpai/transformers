const NEXT_PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL;

export const apiClient = {
  async signUp(data: { name: string; email: string; password: string }) {
    const response = await fetch(`${NEXT_PUBLIC_API_URL}/api/auth/sign-up`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(data),
    });

    return response.json();
  },
  async signIn(data: { email: string; password: string }) {
    const response = await fetch(`${NEXT_PUBLIC_API_URL}/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(data),
    });

    return response.json();
  },
  async logout() {
    const response = await fetch(`${NEXT_PUBLIC_API_URL}/api/auth/logout`, {
      method: "POST",
      credentials: "include",
    });

    return response.json();
  },
  async getDocs() {
    const response =  await fetch(`${NEXT_PUBLIC_API_URL}/api/documents/get-document`)
    
    return response.json();
  }
};
