const API_BASE_URL = 'http://localhost:5000/api';

export const getAuthToken = (): string | null => {
  return localStorage.getItem('ajtes_token');
};

export const setAuthToken = (token: string) => {
  localStorage.setItem('ajtes_token', token);
};

export const removeAuthToken = () => {
  localStorage.removeItem('ajtes_token');
};

async function fetchAPI<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
  const token = getAuthToken();
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    ...(options.headers as Record<string, string>),
  };

  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    headers,
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Une erreur s\'est produite.');
  }

  return data;
}

export const apiService = {
  // Auth
  login: (credentials: any) => fetchAPI('/auth/login', { method: 'POST', body: JSON.stringify(credentials) }),
  register: (userData: any) => fetchAPI('/auth/register', { method: 'POST', body: JSON.stringify(userData) }),
  getMe: () => fetchAPI('/auth/me'),

  // Projects
  getProjects: () => fetchAPI('/projects'),
  getProjectById: (id: string) => fetchAPI(`/projects/${id}`),

  // News & Events
  getNews: () => fetchAPI('/news'),
  getEvents: () => fetchAPI('/news/events'),

  // Donations
  submitDonation: (donationData: any) => fetchAPI('/donations', { method: 'POST', body: JSON.stringify(donationData) }),

  // Contact
  submitContact: (contactData: any) => fetchAPI('/contact', { method: 'POST', body: JSON.stringify(contactData) }),
};
