export interface Branch {
  id: string;
  code: string; // e.g. "Branch 01"
  name: string;
  city?: string;
  state?: string;
  address?: string;
  phone?: string;
  mapsUrl?: string;
  isConfirmed: boolean;
  tagline?: string;
  hours?: string;
}
