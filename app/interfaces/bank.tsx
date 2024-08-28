import type { bank } from "../types/bankName";

export interface IBank {
  selected: boolean;
  bankName: bank;
  title: string;
}
