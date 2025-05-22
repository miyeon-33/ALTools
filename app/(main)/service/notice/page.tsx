'use client';

import Pagination from '@/app/components/Pagination';
import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { use, useEffect, useState } from 'react';

type Notice = {
  id: number;
  title: string;
  details: string;
  date: string;
};

export default function notice({
  searchParams,
}: {
  searchParams: Promise<{ page: string }>;
}) {
  const paramsObj = use(searchParams);
  const [params] = useState(new URLSearchParams(paramsObj));
  // const [page, setPage] = useState(1);
  const [page, setPage] = useState(Number(paramsObj.page) || 1);
  const router = useRouter();
  const [totalPage, setTotalPage] = useState(0);

  const { isPending, data, isError, error } = useQuery<{
    result: Notice[];
    total: number;
  }>({
    queryKey: ['notices', page],
    queryFn: () =>
      fetch(`http://localhost:9090/notice?page=${page}`).then((res) =>
        res.json()
      ),
  });

  useEffect(() => {
    if (data?.total) {
      setTotalPage(Math.ceil(data.total / 10));
    }
  }, [data]);

  useEffect(() => {
    params.set('page', page.toString());
    router.push(`?${params.toString()}`);
  }, [page]);

  return (
    <div className="min-h-[(100vh-310px)] pt-[80px] max-sm:pt-[60px]">
      <div className="mx-auto max-w-[1120px] pt-[80px] pb-[120px] max-md:px-[40px] max-sm:py-[40px] max-sm:px-[20px]">
        <div className="mb-[60px] flex max-sm:mb-[20px]">
          <h2 className="text-[36px] font-bold break-keep text-gray-600 max-sm:text-[24px] leading-[42px]">
            공지사항
          </h2>
          <img
            src="/images/megaphone.png"
            className=" w-[50px] h-[50px] ml-[4px] max-sm:w-[42px] max-sm:h-[42px] max-sm:ml-[2px]"
          />
        </div>
        <div className="">
          <ul className="border-t-2 border-[#1a1a1a] mb-[60px] max-sm:mb-[40px]">
            {data?.result?.map((notice) => (
              <li key={notice.id}>
                <Link
                  href={`/service/notice/${notice.id}`}
                  className="flex justify-start items-center gap-[34px] text-[#4e5968] break-all py-[28px] px-[20px] border-b border-[#e5e8eb] max-sm:flex-col max-sm:items-start max-sm:gap-y-[6px] max-sm:py-[14px] max-sm:px-0 hover:bg-[#f2f4f6] transition-all duration-200"
                >
                  <div className="flex-1 flex text-[18px] font-semibold max-sm:flex-none max-sm:max-w-full">
                    <span className="text-gray-600">{notice.title}</span>
                  </div>
                  <div className="min-w-[100px] text-right flex-none max-sm:font-normal max-sm:text-left">
                    <span className="text-[15px] max-sm:text-[13px]">
                      {notice.date}
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
          {data && data?.result?.length > 0 && (
            <Pagination page={page} setPage={setPage} totalPage={totalPage} />
          )}
        </div>
      </div>
    </div>
  );
}
