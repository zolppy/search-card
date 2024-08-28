import H3 from "../H3";
import { ICard } from "@/app/interfaces/card";

export default function Card({ name, number, date, cvv }: ICard) {
  return (
    <div className="flex flex-col gap-4 min-w-[318px] w-full max-w-[430px] order-first md:order-last">
      <H3>Visualização</H3>
      <div className="flex flex-col gap-5 bg-black text-white p-3 rounded-lg min-w-[318px] max-w-[430px] min-h-[208px] justify-center">
        <h1 className="text-3xl">Visa</h1>
        <p>
          <span className="text-gray-400">Nome:</span> {name}
        </p>
        <p>
          <span className="text-gray-400">Número:</span> {number}
        </p>
        <p>
          <span className="text-gray-400">Vencimento:</span> {date} |{" "}
          <span className="text-gray-400">CVV:</span> {cvv}
        </p>
      </div>
    </div>
  );
}
