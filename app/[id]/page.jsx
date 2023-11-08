export const dynamic = "force-dynamic";

import Container from "@/components/Container";
import Hero from "@/components/Hero";
import BackButton from "@/app/[id]/BackButton";

async function getResult(id) {
  const res = await fetch(
    `https://fgis.gost.ru/fundmetrology/cm/iaux/vri/${id}`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    throw new Error("Ошибка загрузки данных");
  }
  return res.json();
}

export default async function Page({ params: { id } }) {
  const data = await getResult(id);

  const miInfo = data.result.miInfo;
  const etaMI = data.result.miInfo.etaMI;
  const singleMI = data.result.miInfo.singleMI;
  const partyMI = data.result.miInfo.partyMI;
  const vriInfo = data.result.vriInfo;
  const applicable = data.result.vriInfo.applicable;
  const inapplicable = data.result.vriInfo.inapplicable;
  const means = data.result.means;
  const info = data.result.info;

  console.log(data.result);

  return (
    <main className="pb-4 bg-slate-50">
      <Hero />
      <Container>
        <BackButton />

        {miInfo && (
          <>
            <h2 className="mt-8 mb-5 text-3xl">
              Сведения о результатах поверки СИ
            </h2>
            <ul role="list">
              {etaMI && (
                <>
                  {etaMI.regNumber && (
                    <li className="flex gap-4 p-4 odd:bg-slate-200/70">
                      <div className="w-1/2">
                        <h3>Регистрационный номер СИ в реестре ФИФ ОЕИ</h3>
                      </div>

                      <div className="w-1/2">
                        <p>{etaMI.regNumber}</p>
                      </div>
                    </li>
                  )}

                  {etaMI.mitypeNumber && (
                    <li className="flex gap-4 p-4 odd:bg-slate-200/70">
                      <div className="w-1/2">
                        <h3>Регистрационный номер типа СИ</h3>
                      </div>

                      <div className="w-1/2">
                        {etaMI.mitypeURL ? (
                          <a
                            className="underline text-brand-1"
                            href={etaMI.mitypeURL}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {etaMI.mitypeNumber}
                          </a>
                        ) : (
                          <p>{etaMI.mitypeNumber}</p>
                        )}
                      </div>
                    </li>
                  )}

                  {etaMI.mitypeTitle && (
                    <li className="flex gap-4 p-4 odd:bg-slate-200/70">
                      <div className="w-1/2">
                        <h3>Наименование утвержденного типа СИ</h3>
                      </div>

                      <div className="w-1/2">
                        <p>{etaMI.mitypeTitle}</p>
                      </div>
                    </li>
                  )}

                  {etaMI.mitypeType && (
                    <li className="flex gap-4 p-4 odd:bg-slate-200/70">
                      <div className="w-1/2">
                        <h3>Тип СИ</h3>
                      </div>

                      <div className="w-1/2">
                        <p>{etaMI.mitypeType}</p>
                      </div>
                    </li>
                  )}

                  {etaMI.modification && (
                    <li className="flex gap-4 p-4 odd:bg-slate-200/70">
                      <div className="w-1/2">
                        <h3>Модификация СИ</h3>
                      </div>

                      <div className="w-1/2">
                        <p>{etaMI.modification}</p>
                      </div>
                    </li>
                  )}

                  {etaMI.manufactureNum && (
                    <li className="flex gap-4 p-4 odd:bg-slate-200/70">
                      <div className="w-1/2">
                        <h3>Заводской номер СИ</h3>
                      </div>

                      <div className="w-1/2">
                        <p>{etaMI.manufactureNum}</p>
                      </div>
                    </li>
                  )}

                  {etaMI.manufactureYear && (
                    <li className="flex gap-4 p-4 odd:bg-slate-200/70">
                      <div className="w-1/2">
                        <h3>Год выпуска СИ</h3>
                      </div>

                      <div className="w-1/2">
                        <p>{etaMI.manufactureYear}</p>
                      </div>
                    </li>
                  )}

                  {etaMI.rankСоде && (
                    <li className="flex gap-4 p-4 odd:bg-slate-200/70">
                      <div className="w-1/2">
                        <h3>
                          Код разряда эталона в ГПС, которому соответствует СИ
                        </h3>
                      </div>

                      <div className="w-1/2">
                        <p>{etaMI.rankСоде}</p>
                      </div>
                    </li>
                  )}

                  {etaMI.rankTitle && (
                    <li className="flex gap-4 p-4 odd:bg-slate-200/70">
                      <div className="w-1/2">
                        <h3>
                          Наименование разряда эталона в ГПС/ЛПС, которому
                          соответствует СИ
                        </h3>
                      </div>

                      <div className="w-1/2">
                        <p>{etaMI.rankTitle}</p>
                      </div>
                    </li>
                  )}
                </>
              )}

              {singleMI && (
                <>
                  {singleMI.typeMI && (
                    <li className="flex gap-4 p-4 odd:bg-slate-200/70">
                      <div className="w-1/2">
                        <h3>Тип</h3>
                      </div>

                      <div className="w-1/2">
                        <p>{singleMI.typeMI}</p>
                      </div>
                    </li>
                  )}

                  {singleMI.mitypeNumber && (
                    <li className="flex gap-4 p-4 odd:bg-slate-200/70">
                      <div className="w-1/2">
                        <h3>Регистрационный номер типа СИ</h3>
                      </div>

                      <div className="w-1/2">
                        {singleMI.mitypeURL ? (
                          <a
                            className="underline text-brand-1"
                            href={singleMI.mitypeURL}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {singleMI.mitypeNumber}
                          </a>
                        ) : (
                          <p>{singleMI.mitypeNumber}</p>
                        )}
                      </div>
                    </li>
                  )}

                  {singleMI.mitypeType && (
                    <li className="flex gap-4 p-4 odd:bg-slate-200/70">
                      <div className="w-1/2">
                        <h3>Тип СИ</h3>
                      </div>

                      <div className="w-1/2">
                        <p>{singleMI.mitypeType}</p>
                      </div>
                    </li>
                  )}

                  {singleMI.mitypeTitle && (
                    <li className="flex gap-4 p-4 odd:bg-slate-200/70">
                      <div className="w-1/2">
                        <h3>Наименование типа СИ</h3>
                      </div>

                      <div className="w-1/2">
                        <p>{singleMI.mitypeTitle}</p>
                      </div>
                    </li>
                  )}

                  {singleMI.manufactureNum && (
                    <li className="flex gap-4 p-4 odd:bg-slate-200/70">
                      <div className="w-1/2">
                        <h3>Заводской номер СИ</h3>
                      </div>

                      <div className="w-1/2">
                        <p>{singleMI.manufactureNum}</p>
                      </div>
                    </li>
                  )}

                  {singleMI.inventoryNum && (
                    <li className="flex gap-4 p-4 odd:bg-slate-200/70">
                      <div className="w-1/2">
                        <h3>Буквенно-цифровое обозначение СИ</h3>
                      </div>

                      <div className="w-1/2">
                        <p>{singleMI.inventoryNum}</p>
                      </div>
                    </li>
                  )}

                  {singleMI.manufactureYear && (
                    <li className="flex gap-4 p-4 odd:bg-slate-200/70">
                      <div className="w-1/2">
                        <h3>Год выпуска СИ</h3>
                      </div>
                      <div className="w-1/2">
                        <p>{singleMI.manufactureYear}</p>
                      </div>
                    </li>
                  )}

                  {singleMI.modification && (
                    <li className="flex gap-4 p-4 odd:bg-slate-200/70">
                      <div className="w-1/2">
                        <h3>Модификация СИ</h3>
                      </div>

                      <div className="w-1/2">
                        <p>{singleMI.modification}</p>
                      </div>
                    </li>
                  )}
                </>
              )}

              {partyMI && (
                <>
                  {partyMI.mitypeNumber && (
                    <li className="flex gap-4 p-4 odd:bg-slate-200/70">
                      <div className="w-1/2">
                        <h3>Регистрационный номер типа СИ</h3>
                      </div>

                      <div className="w-1/2">
                        {partyMI.mitypeURL ? (
                          <a
                            className="underline text-brand-1"
                            href={partyMI.mitypeURL}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {partyMI.mitypeNumber}
                          </a>
                        ) : (
                          <p>{partyMI.mitypeNumber}</p>
                        )}
                      </div>
                    </li>
                  )}

                  {partyMI.mitypeTitle && (
                    <li className="flex gap-4 p-4 odd:bg-slate-200/70">
                      <div className="w-1/2">
                        <h3>Наименование утвержденного типа СИ</h3>
                      </div>

                      <div className="w-1/2">
                        <p>{partyMI.mitypeTitle}</p>
                      </div>
                    </li>
                  )}

                  {partyMI.mitypeType && (
                    <li className="flex gap-4 p-4 odd:bg-slate-200/70">
                      <div className="w-1/2">
                        <h3>Тип СИ</h3>
                      </div>

                      <div className="w-1/2">
                        <p>{partyMI.mitypeType}</p>
                      </div>
                    </li>
                  )}

                  {partyMI.modification && (
                    <li className="flex gap-4 p-4 odd:bg-slate-200/70">
                      <div className="w-1/2">
                        <h3>Модификация СИ</h3>
                      </div>

                      <div className="w-1/2">
                        <p>{partyMI.modification}</p>
                      </div>
                    </li>
                  )}

                  {partyMI.quantity && (
                    <li className="flex gap-4 p-4 odd:bg-slate-200/70">
                      <div className="w-1/2">
                        <h3>Количество СИ в партии</h3>
                      </div>

                      <div className="w-1/2">
                        <p>{partyMI.quantity}</p>
                      </div>
                    </li>
                  )}
                </>
              )}
            </ul>
          </>
        )}

        {vriInfo && (
          <>
            <h2 className="mt-8 mb-5 text-3xl">Сведения о поверке</h2>
            <ul role="list">
              {vriInfo.organization && (
                <li className="flex gap-4 p-4 odd:bg-slate-200/70">
                  <div className="w-1/2">
                    <h3>Наименование организации-поверителя</h3>
                  </div>

                  <div className="w-1/2">
                    <p>{vriInfo.organization}</p>
                  </div>
                </li>
              )}

              {vriInfo.signCipher && (
                <li className="flex gap-4 p-4 odd:bg-slate-200/70">
                  <div className="w-1/2">
                    <h3>Условный шифр знака поверки</h3>
                  </div>

                  <div className="w-1/2">
                    <p>{vriInfo.signCipher}</p>
                  </div>
                </li>
              )}

              {vriInfo.miOwner && (
                <li className="flex gap-4 p-4 odd:bg-slate-200/70">
                  <div className="w-1/2">
                    <h3>Владелец СИ</h3>
                  </div>

                  <div className="w-1/2">
                    <p>{vriInfo.miOwner}</p>
                  </div>
                </li>
              )}

              {vriInfo.vriType && (
                <li className="flex gap-4 p-4 odd:bg-slate-200/70">
                  <div className="w-1/2">
                    <h3>Тип поверки</h3>
                  </div>

                  <div className="w-1/2">
                    <p>
                      {vriInfo.vriType === "1" ? "Первичная" : "Периодическая"}
                    </p>
                  </div>
                </li>
              )}

              {vriInfo.vrfDate && (
                <li className="flex gap-4 p-4 odd:bg-slate-200/70">
                  <div className="w-1/2">
                    <h3>Дата поверки СИ</h3>
                  </div>

                  <div className="w-1/2">
                    <p>{vriInfo.vrfDate}</p>
                  </div>
                </li>
              )}

              {vriInfo.validDate && (
                <li className="flex gap-4 p-4 odd:bg-slate-200/70">
                  <div className="w-1/2">
                    <h3>Поверка действительна до</h3>
                  </div>

                  <div className="w-1/2">
                    <p>{vriInfo.validDate}</p>
                  </div>
                </li>
              )}

              {vriInfo.docTitle && (
                <li className="flex gap-4 p-4 odd:bg-slate-200/70">
                  <div className="w-1/2">
                    <h3>
                      Наименование документа, на основании которого выполнена
                      поверка
                    </h3>
                  </div>

                  <div className="w-1/2">
                    <p>{vriInfo.docTitle}</p>
                  </div>
                </li>
              )}

              {applicable && (
                <>
                  <li className="flex gap-4 p-4 odd:bg-slate-200/70">
                    <div className="w-1/2">
                      <h3>СИ пригодно</h3>
                    </div>

                    <div className="w-1/2">
                      <p>{"Да"}</p>
                    </div>
                  </li>

                  {applicable.certNum && (
                    <li className="flex gap-4 p-4 odd:bg-slate-200/70">
                      <div className="w-1/2">
                        <h3>Номер свидетельства</h3>
                      </div>

                      <div className="w-1/2">
                        <p>{applicable.certNum}</p>
                      </div>
                    </li>
                  )}

                  {applicable.stickerNum && (
                    <li className="flex gap-4 p-4 odd:bg-slate-200/70">
                      <div className="w-1/2">
                        <h3>Номер наклейки</h3>
                      </div>

                      <div className="w-1/2">
                        <p>{applicable.stickerNum}</p>
                      </div>
                    </li>
                  )}

                  {applicable.signPass && (
                    <li className="flex gap-4 p-4 odd:bg-slate-200/70">
                      <div className="w-1/2">
                        <h3>Знак поверки в паспорте</h3>
                      </div>

                      <div className="w-1/2">
                        <p>{applicable.signPass === true ? "Да" : "Нет"}</p>
                      </div>
                    </li>
                  )}

                  {applicable.signMi && (
                    <li className="flex gap-4 p-4 odd:bg-slate-200/70">
                      <div className="w-1/2">
                        <h3>Знак поверки на СИ</h3>
                      </div>

                      <div className="w-1/2">
                        <p>{applicable.signMi === true ? "Да" : "Нет"}</p>
                      </div>
                    </li>
                  )}
                </>
              )}

              {inapplicable && (
                <>
                  <li className="flex gap-4 p-4 odd:bg-slate-200/70">
                    <div className="w-1/2">
                      <h3>СИ не пригодно</h3>
                    </div>

                    <div className="w-1/2">
                      <p>{"Да"}</p>
                    </div>
                  </li>

                  {inapplicable.noticeNum && (
                    <li className="flex gap-4 p-4 odd:bg-slate-200/70">
                      <div className="w-1/2">
                        <h3>Номер извещения</h3>
                      </div>

                      <div className="w-1/2">
                        <p>{inapplicable.noticeNum}</p>
                      </div>
                    </li>
                  )}
                </>
              )}

              {vriInfo.verifiername && (
                <li className="flex gap-4 p-4 odd:bg-slate-200/70">
                  <div className="w-1/2">
                    <h3>Ф.И.О. поверителя</h3>
                  </div>

                  <div className="w-1/2">
                    <p>{vriInfo.verifiername}</p>
                  </div>
                </li>
              )}
            </ul>
          </>
        )}

        {means && (
          <>
            <h2 className="mt-8 mb-5 text-3xl">Средства поверки</h2>
            {means.npe && (
              <>
                <div className="p-4">
                  <p className="text-xl text-center">
                    Государственные первичные эталоны
                  </p>
                </div>
                <ul role="list">
                  {means.npe.map((item, index) => {
                    return (
                      <li className="p-4 odd:bg-slate-200/70" key={index}>
                        <div className="w-full">
                          {item.npeURL ? (
                            <a
                              className="underline text-brand-1"
                              href={item.npeURL}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {Object.values(item)
                                .filter((val) => val !== item.npeURL)
                                .join("; ")}
                            </a>
                          ) : (
                            <p>{Object.values(item).join("; ")}</p>
                          )}
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </>
            )}

            {means.uve && (
              <>
                <div className="p-4">
                  <p className="text-xl text-center">
                    Эталоны единицы величины
                  </p>
                </div>
                <ul role="list">
                  {means.uve.map((item, index) => {
                    return (
                      <li className="p-4 odd:bg-slate-200/70" key={index}>
                        <div className="w-full">
                          {item.uveURL ? (
                            <a
                              className="underline text-brand-1"
                              href={item.uveURL}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {Object.values(item)
                                .filter((val) => val !== item.uveURL)
                                .join("; ")}
                            </a>
                          ) : (
                            <p>{Object.values(item).join("; ")}</p>
                          )}
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </>
            )}

            {means.ses && (
              <>
                <div className="p-4">
                  <p className="text-xl text-center">Стандартные образцы</p>
                </div>
                <ul role="list">
                  {means.ses.map((item, index) => {
                    return (
                      <li className="p-4 odd:bg-slate-200/70" key={index}>
                        <div className="w-full">
                          {item.seURL ? (
                            <a
                              className="underline text-brand-1"
                              href={item.seURL}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {Object.values(item)
                                .filter((val) => val !== item.seURL)
                                .join("; ")}
                            </a>
                          ) : (
                            <p>{Object.values(item).join("; ")}</p>
                          )}
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </>
            )}

            {means.mieta && (
              <>
                <div className="p-4">
                  <p className="text-xl text-center">
                    Средства измерений, применяемые в качестве эталона
                  </p>
                </div>
                <ul role="list">
                  {means.mieta.map((item, index) => {
                    return (
                      <li className="p-4 odd:bg-slate-200/70" key={index}>
                        <div className="w-full">
                          {item.mietaURL ? (
                            <a
                              className="underline text-brand-1"
                              href={item.mietaURL}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {Object.values(item)
                                .filter(
                                  (val) =>
                                    val !== item.mietaURL &&
                                    val !== item.mitypeURL
                                )
                                .join("; ")}
                            </a>
                          ) : (
                            <p>{Object.values(item).join("; ")}</p>
                          )}
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </>
            )}

            {means.mis && (
              <>
                <div className="p-4">
                  <p className="text-xl text-center">
                    Средства измерений, применяемые при поверке
                  </p>
                </div>
                <ul role="list">
                  {means.mis.map((item, index) => {
                    return (
                      <li className="p-4 odd:bg-slate-200/70" key={index}>
                        <div className="w-full">
                          {item.mitypeURL ? (
                            <a
                              className="underline text-brand-1"
                              href={item.mitypeURL}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {Object.values(item)
                                .filter(
                                  (val) =>
                                    val !== item.mietaURL &&
                                    val !== item.mitypeURL
                                )
                                .join("; ")}
                            </a>
                          ) : (
                            <p>{Object.values(item).join("; ")}</p>
                          )}
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </>
            )}

            {means.reagent && (
              <>
                <div className="p-4">
                  <p className="text-xl text-center">
                    Вещество (материал), применяемый при поверке
                  </p>
                </div>
                <ul role="list">
                  {means.reagent.map((item, index) => {
                    return (
                      <li className="p-4 odd:bg-slate-200/70" key={index}>
                        <div className="w-full">
                          <p>{Object.values(item).join("; ")}</p>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </>
            )}

            {means.oMethod && (
              <>
                <div className="flex gap-4 p-4 odd:bg-slate-200/70">
                  <div className="w-1/2">
                    <h3>Доп. методы, использованные при поверке</h3>
                  </div>

                  <div className="w-1/2">
                    <p>{means.oMethod}</p>
                  </div>
                </div>
              </>
            )}
          </>
        )}

        {info && (
          <>
            <h2 className="mt-8 mb-5 text-3xl">Доп. сведения</h2>
            <ul role="list">
              {info && (
                <li className="flex gap-4 p-4 odd:bg-slate-200/70">
                  <div className="w-1/2">
                    <h3>Поверка в сокращенном объеме</h3>
                  </div>

                  <div className="w-1/2">
                    <p>{info.briefIndicator === false ? "Нет" : "Да"}</p>
                  </div>
                </li>
              )}

              {info.ranges && (
                <li className="flex gap-4 p-4 odd:bg-slate-200/70">
                  <div className="w-1/2">
                    <h3>Диапазоны (поддиапазоны), на которых поверено СИ</h3>
                  </div>

                  <div className="w-1/2">
                    <p>{info.ranges}</p>
                  </div>
                </li>
              )}

              {info.values && (
                <li className="flex gap-4 p-4 odd:bg-slate-200/70">
                  <div className="w-1/2">
                    <h3>Отдельные величины, для которых поверено СИ</h3>
                  </div>

                  <div className="w-1/2">
                    <p>{info.values}</p>
                  </div>
                </li>
              )}

              {info.channels && (
                <li className="flex gap-4 p-4 odd:bg-slate-200/70">
                  <div className="w-1/2">
                    <h3>Измерительные каналы СИ, прошедшие поверку</h3>
                  </div>

                  <div className="w-1/2">
                    <p>{info.channels}</p>
                  </div>
                </li>
              )}

              {info.blocks && (
                <li className="flex gap-4 p-4 odd:bg-slate-200/70">
                  <div className="w-1/2">
                    <h3>
                      Отдельные автономные блоки из состава СИ, прошедшие
                      поверку
                    </h3>
                  </div>

                  <div className="w-1/2">
                    <p>{info.blocks}</p>
                  </div>
                </li>
              )}

              {info.additional_info && (
                <li className="flex gap-4 p-4 odd:bg-slate-200/70">
                  <div className="w-1/2">
                    <h3>Прочие сведения</h3>
                  </div>

                  <div className="w-1/2">
                    <p>{info.additional_info}</p>
                  </div>
                </li>
              )}

              {/* {info.reason && 
                <li className="flex gap-4 p-4 odd:bg-slate-200/70">
                  <div className="w-1/2">
                    <h3>Причина модификации или аннулирования записи</h3>
                  </div>

                  <div className="w-1/2">
                    <p>{info.reason}</p> 
                  </div>
                </li>
              } */}

              {info.protocol && (
                <>
                  {info.protocol.doc_id && (
                    <li className="flex gap-4 p-4 odd:bg-slate-200/70">
                      <div className="w-1/2">
                        <h3>Протокол поверки</h3>
                      </div>

                      <div className="w-1/2">
                        <p>{info.protocol.title}</p>
                      </div>
                    </li>
                  )}
                </>
              )}
            </ul>
          </>
        )}
        <BackButton />
      </Container>
    </main>
  );
}
