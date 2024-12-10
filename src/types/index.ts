export interface UploadedFile<T = unknown> {
  name: string;
  url: string;
  size: number;
  type: string;
  key: string;
  metadata?: T;
}
