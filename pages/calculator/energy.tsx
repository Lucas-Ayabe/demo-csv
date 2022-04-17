import { useEnergyCalculator } from "@energy";
import { Field } from "@shared/components/Field";
import { withNumber } from "@shared/utils/hocs/with-number";
import styles from "@energy/energy.module.css";
import type { NextPage } from "next";

type Field = {
  set: (value: number) => { payload: number; value: string };
  value: number;
};

const Energy: NextPage = () => {
  const { total, ...fields } = useEnergyCalculator();
  const fieldsList = [
    { label: "1K", field: fields.one },
    { label: "2K", field: fields.two },
    { label: "5K", field: fields.five },
    { label: "10K", field: fields.ten },
    { label: "20K", field: fields.twenty },
    { label: "50K", field: fields.fifty },
  ];

  return (
    <section>
      <h1>Calculadora de energia</h1>
      <div className="grid">
        <div>
          {fieldsList.map((props, index) => (
            <Field
              key={index}
              label={props.label}
              type="number"
              value={props.field.value.toString()}
              onChange={withNumber(props.field.set)}
            />
          ))}
        </div>
        <div>
          <article className={styles.total}>
            <h2 className={styles.totalTitle}>Total de energia</h2>
            <strong className={styles.totalValue}>{total}</strong>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Energy;
