import { http, HttpResponse } from 'msw';
import faq from './faq.json';

let maxId = Math.max(...faq.map((item) => item.id));

export const handlers = [
  http.get('http://localhost:9090/service/FAQ', async ({ request }) => {
    await sleep(200);

    const url = new URL(request.url);
    const page = Number(url.searchParams.get('page'));
    const menu = Number(url.searchParams.get('menu')); // menu 값 가져오기

    const filteredData =
      menu > 0 ? faq.filter((item) => item.menu === menu) : faq;

    function getDataByPage(
      data: {
        id: number;
        title: string;
        category: string;
        menu: number;
        details: string;
      }[],
      page: number,
      limit: number
    ) {
      const totalPages = Math.ceil(data.length / limit);

      if (page < 1 || page > totalPages) {
        return { result: [], total: 0 }; // 잘못된 페이지 요청시 빈배열 반환
      }

      const start = (page - 1) * limit;
      const end = start + limit;

      return {
        result: data.slice(start, end),
        total: data.length,
      };
    }

    return HttpResponse.json(getDataByPage(filteredData, page, 10));
  }),
  http.post('http://localhost:9090/service/FAQ', async ({ request }) => {
    await sleep(200);

    const item: any = await request.json();

    maxId++;
    faq.push({ ...item, id: maxId });

    return HttpResponse.json(faq);
  }),
];

async function sleep(timeout: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
}
