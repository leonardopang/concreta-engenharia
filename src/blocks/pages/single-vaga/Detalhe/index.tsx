import styles from './style.module.scss';
import { hasItems } from '../../../../utils';
import { IconCheck, IconMapPin, IconAddressBook, IconChevronRight } from '../../../../icons';
import Eyebrow from '../../../../components/Eyebrow';
import type { SingleVagaDetalheProps, CheckItem } from './types';

function CheckList({ items }: { items: CheckItem[] }) {
  return (
    <ul className={styles.detalhe__checklist}>
      {items.map((item, i) => (
        <li key={i} className={styles.detalhe__checkItem}>
          <span className={styles.detalhe__checkIcon} aria-hidden="true">
            <IconCheck />
          </span>
          <span>{item.item}</span>
        </li>
      ))}
    </ul>
  );
}

function Section({ title, items }: { title: string; items?: CheckItem[] }) {
  if (!hasItems(items)) return null;
  return (
    <div className={styles.detalhe__section} data-animate="fade-up">
      <h2 className={styles.detalhe__sectionTitle}>{title}</h2>
      <CheckList items={items!} />
    </div>
  );
}

export default function SingleVagaDetalhe({
  titulo,
  categoria,
  descricao,
  localizacao,
  contratacao,
  sobre,
  responsabilidades,
  requisitos,
  diferenciais,
  beneficios,
}: SingleVagaDetalheProps) {
  return (
    <section className={styles.detalhe}>
      <div className={styles.detalhe__inner}>

        <div className={styles.detalhe__left} data-animate="fade-right">
          <a href="/trabalhe-conosco/#vagas" className={styles.detalhe__backLink}>
            <span className={styles.detalhe__backIcon} aria-hidden="true">
              <IconChevronRight />
            </span>
            Ver todas as vagas
          </a>

          <div className={styles.detalhe__card}>
            {categoria && <Eyebrow text={categoria} animate={false} />}

            <div className={styles.detalhe__cardBody}>
              <h1 className={styles.detalhe__titulo}>{titulo}</h1>
              {descricao && <p className={styles.detalhe__descricao}>{descricao}</p>}
            </div>

            {(localizacao || contratacao) && (
              <div className={styles.detalhe__info}>
                {localizacao && (
                  <div className={styles.detalhe__infoItem}>
                    <IconMapPin />
                    <span>{localizacao}</span>
                  </div>
                )}
                {localizacao && contratacao && (
                  <div className={styles.detalhe__divider} aria-hidden="true" />
                )}
                {contratacao && (
                  <div className={styles.detalhe__infoItem}>
                    <IconAddressBook />
                    <span>Tipo de contratação: {contratacao}</span>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        <div className={styles.detalhe__right}>
          {sobre && (
            <div className={styles.detalhe__sobre} data-animate="fade-up">
              <h2 className={styles.detalhe__sobreTitle}>Sobre a vaga</h2>
              <p className={styles.detalhe__sobreText}>{sobre}</p>
            </div>
          )}

          <Section title="Principais responsabilidades" items={responsabilidades} />
          <Section title="Requisitos" items={requisitos} />
          <Section title="Diferenciais" items={diferenciais} />
          <Section title="Benefícios" items={beneficios} />
        </div>

      </div>
    </section>
  );
}
