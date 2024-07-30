export interface AlgoDetailData {
  id: string;
  name: string;
  interview: number;
  company: string;
  prompt: string;
  notes: string;
  file: File | null;
  date: string;
}