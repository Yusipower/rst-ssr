import Container from '@/components/Container';
import Hero from '@/components/Hero';
import Search from '@/components/Search';
import { Button } from 'antd';
import Docs from '@/components/Docs';
import { currentYear, yearsPagination } from '@/utils';
import { Suspense } from 'react';


async function getResults(requestParams = {}) {
  const {
    q = '*',
    fl = 'vri_id,org_title,mi.mitnumber,mi.mititle,mi.mitype,mi.modification,mi.number,verification_date,valid_date,applicability,result_docnum,sticker_num',
    sort = 'verification_date desc,org_title asc',
    page = 1,
    rows = 20,
    start = 0,
    activeYear = currentYear.toString(),
    search,
    ...additionalParams
  } = requestParams;

  // Создаем массив для параметров fq
  const fqParams = [];

  if (activeYear !== 'до 2010') {
    fqParams.push(`verification_year:${activeYear}`);
  } else {
    fqParams.push(`-verification_year:[2010 TO ${currentYear}]`);
  }

  if (search) {
    fqParams.push(`*${search}*`);
  }

  // Объединяем параметры fq с разделителем " AND "
  const fq = fqParams.join(' AND ');

  // Объединяем параметры по умолчанию с переданными параметрами
  const mergedParams = {
    fq,
    q,
    fl,
    sort,
    page,
    rows,
    start,
    search,
    ...additionalParams,
  };

  console.log(requestParams.start)

  const queryString = new URLSearchParams(mergedParams).toString();
  const url = `https://fgis.gost.ru/fundmetrology/cm/xcdb/vri/select?${queryString}`;
  console.log({ url });
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error('Ошибка получения данных!');
  }
  return res.json();
}

export default async function Home({ searchParams }) {
  const data = await getResults(searchParams);
  const selectedYear = searchParams.activeYear || currentYear.toString();
  const currentPage = Number(searchParams.page || 1);
  const rows = searchParams.rows || 20;
  const currentSearch = searchParams.search || ':';

  const totalPages = Math.ceil(data.response.numFound / rows);
  console.log(totalPages)
  console.log(data.response.numFound)


  return (
    <main className="bg-slate-50">
      <Hero/> 
      <Container>
        <div className="flex flex-wrap gap-2 my-8">
          {yearsPagination.map((year) => {
            return (
              <Button
                key={year}
                href={`?${new URLSearchParams({activeYear: year})}`}  
                type={`${selectedYear === year ? 'primary': 'default'}`}
              >
                {year}
              </Button>
            );
          })}
        </div>
        <div>
          <Search
            placeholder={`Поиск по ${selectedYear || currentYear}...`}
            activeYear={selectedYear}
          />
        </div>
        <Suspense fallback={<div>Загрузка ...</div>}>
          <Docs
            dataSource={data.response.docs}
            pagination={{
              total: data.response.numFound,
              current: currentPage, 
              pageSize: rows,
            }}
          />
        </Suspense>
      </Container>
    </main>
  );
}
