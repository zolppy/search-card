"use client";

import { useState } from "react";
import Container from "./components/Container";
import Li from "./components/Li";
import SubmitButton from "./components/SubmitButton";
import Card from "./components/Card";
import Form from "./components/Form";
import Input from "./components/Input";
import Label from "./components/Label";
import InputWrapper from "./components/InputWrapper";
import H3 from "./components/H3";

export default function Home(): React.ReactElement {
  const [selectedBank, setSelectedBank] = useState({
    bb: false,
    bradesco: false,
    mercadoPago: true,
    next: false,
  });

  const banks = [
    {
      selected: selectedBank.bb,
      bankName: "bb",
      title: "Banco do Brasil",
    },
    {
      selected: selectedBank.bradesco,
      bankName: "bradesco",
      title: "Bradesco",
    },
    {
      selected: selectedBank.mercadoPago,
      bankName: "mercadoPago",
      title: "Mercado Pago",
    },
    {
      selected: selectedBank.next,
      bankName: "next",
      title: "Next",
    },
  ];

  const [cardData, setCardData] = useState({
    name: "",
    number: "",
    date: "",
    cvv: "",
    email: "",
  });

  const toggleSelectedBank = (name: string) => {
    setSelectedBank({
      bb: false,
      bradesco: false,
      mercadoPago: false,
      next: false,
    });
    setSelectedBank((prevState: any) => ({ ...prevState, [name]: true }));
  };

  const handleSetCardData = (field: string, value: string) => {
    setCardData((prevState: any) => ({ ...prevState, [field]: value }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setCardData({
      name: "",
      number: "",
      date: "",
      cvv: "",
      email: "",
    });
  };

  return (
    <Container>
      <hgroup className="flex flex-col gap-2">
        <h1 className="text-orange-500 font-bold text-center text-3xl">
          Search<span className="text-blue-500">Card</span>
        </h1>
        <h2 className="text-center text-xl">
          Veja se seu cartão <span className="font-bold">vazou</span> na
          internet
        </h2>
      </hgroup>
      <p className="font-bold text-red-500">
        Aplicação desenvolvida apenas com propósito de ludicidade. Não é
        necessário colocar seus dados, se for o caso, o formulário nem funciona.
      </p>
      <div className="flex flex-col gap-4">
        <H3>Tipo de cartão:</H3>
        <ul className="flex flex-wrap gap-2">
          {banks.map((bank) => (
            <Li
              key={bank.bankName}
              selected={bank.selected}
              bankName={bank.bankName}
              handleToggleSelected={() => toggleSelectedBank(bank.bankName)}
            >
              {bank.title}
            </Li>
          ))}
        </ul>
      </div>
      <div className="flex flex-wrap justify-between gap-4">
        <Form handleSubmit={handleSubmit}>
          <H3>Dados do cartão</H3>
          <div className="flex flex-col gap-2">
            <InputWrapper>
              <Label htmlFor="name">Nome impresso no cartão</Label>
              <Input
                id="name"
                type="text"
                placeholder="Nome Sobrenome Sobrenome"
                required={true}
                value={cardData.name}
                handleChange={handleSetCardData}
              />
            </InputWrapper>
            <InputWrapper>
              <Label htmlFor="number">
                Somente números impressos no cartão
              </Label>
              <Input
                id="number"
                type="text"
                placeholder="0000 0000 0000 0000"
                required={true}
                value={cardData.number}
                handleChange={handleSetCardData}
              />
            </InputWrapper>
            <InputWrapper>
              <Label htmlFor="date">
                Data de vencimento impressa no cartão
              </Label>
              <Input
                id="date"
                type="text"
                placeholder="mm/aaaa"
                required={true}
                value={cardData.date}
                handleChange={handleSetCardData}
              />
            </InputWrapper>
            <InputWrapper>
              <Label htmlFor="cvv">CVV</Label>
              <Input
                id="cvv"
                type="text"
                placeholder="000"
                required={true}
                value={cardData.cvv}
                handleChange={handleSetCardData}
              />
              <div className="my-4">
                <H3>Outros dados</H3>
              </div>
              <Label htmlFor="email">
                E-mail válido (para comunicação do resultado)
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="exemplo@exemplo.com"
                required={true}
                value={cardData.email}
                handleChange={handleSetCardData}
              />
            </InputWrapper>
          </div>
          <SubmitButton />
        </Form>
        <Card
          name={cardData.name}
          number={cardData.number}
          date={cardData.date}
          cvv={cardData.cvv}
        />
      </div>
    </Container>
  );
}
