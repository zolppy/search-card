interface ICard {
  name: string;
  number: string;
  date: string;
  cvv: string;
}

export default function Card({ name, number, date, cvv }: ICard) {
  return (
    <div className="flex flex-col gap-5 min-w-[320px] w-full max-w-[400px]">
      <h3 className="text-xl font-bold">Visualização</h3>
      <div className="flex flex-col gap-5 bg-black text-white p-3 rounded-lg min-w-[320px] max-w-[400px] w-full max-h-[290px] h-[210px]">
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
