import Download from '@/app/components/products/ALTOOLS/Download';

type ProductDetailsProp = {
  params: Promise<{ productId: string }>;
};

// 메타데이터 동적으로 생성하는 함수, 이름변경 불가
export async function generateMetadata({ params }: ProductDetailsProp) {
  const { productId } = await params;

  const title = await new Promise((resolve) => {
    setTimeout(() => resolve(`갤럭시 ${productId}`), 200);
  });

  return {
    title: `Product ${title}`,
  };
}

export default async function ProductDetails({ params }: ProductDetailsProp) {
  return (
    <main>
      <Download />
      <div className="bg-gradient-to-r from-[#ff7557] to-[#ff5995] bg-opacity-50">
        <div className="mx-auto max-w-[1120px] flex justify-between items-center h-full ">
          <div className="basis-[41%] text-left order-1 pb-[32px] pl-[20px]">
            <h3 className="text-[#fff] text-[36px] font-bold break-keep">
              알툴즈 모든 제품을
              <br />한 번에.
            </h3>
            <p className="text-white/80 text-[18px] break-keep pt-[32px]">
              알툴즈 통합팩 한 번의 설치로
              <br />내 PC에 필요한 모든 것이 준비됩니다.
            </p>
          </div>
          <div className="order-2 basis-[55%] leading-none">
            <img
              src="/images/feature.png"
              className="max-w-[540px] w-full h-auto mx-auto"
            />
          </div>
        </div>
      </div>
      <div className="bg-[rgb(245,245,247)] h-[620px] bg-[50%_50%] bg-cover bg-no-repeat">
        <div className="mx-auto max-w-[1120px] flex justify-between items-center h-full">
          <div className="basis-[41%] text-left order-2 pb-[32px] pl-[20px]">
            <h3 className="text-[36px] font-bold break-keep text-gray-600">
              PC세팅에 최적화 된
              <br />
              알툴즈 라인업
            </h3>
            <p className="text-[18px] text-[rgba(26,26,26,0.8)] break-keep pt-[32px]">
              공개용 : 알집, 알씨, 알약, 알PDF, 알캡처, 알송, 알드라이브
            </p>
          </div>
          <div className="order-1 basis-[55%] leading-none">
            <img
              src="/images/feature2.png"
              className="max-w-[540px] w-full h-auto mx-auto"
            />
          </div>
        </div>
      </div>
      <div className="pt-[160px] pb-[280px]">
        <div className="mx-auto max-w-[1120px]">
          <h3 className="text-[36px] font-bold break-keep text-center mb-[84px] text-gray-600">
            알툴즈 통합팩의 주요 기능을 소개합니다.
          </h3>
          <ul className="grid grid-cols-3 gap-x-[76px] gap-y-[50px]">
            <li>
              <div className="overflow-hidden rounded-[12px]">
                <img src="/images/banner01.png" className="w-full h-auto" />
              </div>
              <div className="pt-[16px]">
                <strong className="block text-[18px] text-gray-600 font-bold">
                  대한민국 대표 유틸 소프트웨어
                </strong>
                <p className="text-[14px] pt-[8px] text-gray-600">
                  2,600만 사용자들이 선택한 전국민 필수 프로그램 알툴즈!
                  알툴즈로 내 PC를 좀 더 간편하고 편리하게 이용해보세요.
                </p>
              </div>
            </li>
            <li>
              <div className="overflow-hidden rounded-[12px]">
                <img src="/images/banner02.png" className="w-full h-auto" />
              </div>
              <div className="pt-[16px]">
                <strong className="block text-[18px] text-gray-600 font-bold">
                  한번의 설치로 모든 제품 사용
                </strong>
                <p className="text-[14px] pt-[8px] text-gray-600">
                  다양한 알툴즈 제품을 하나의 패키지로! 알툴즈 통합팩 한번의
                  설치로 내 PC에 필요한 모든 것이 준비됩니다.
                </p>
              </div>
            </li>
            <li>
              <div className="overflow-hidden rounded-[12px]">
                <img src="/images/banner03.png" className="w-full h-auto" />
              </div>
              <div className="pt-[16px]">
                <strong className="block text-[18px] text-gray-600 font-bold">
                  누구나 사용할 수 있는 쉬운 인터페이스
                </strong>
                <p className="text-[14px] pt-[8px] text-gray-600">
                  어렵고 복잡한 프로그램은 그만! 알툴즈는 이해하기 쉬운 화면
                  인터페이스로 구성하여 쉽고 간편한 사용성을 제공합니다.
                </p>
              </div>
            </li>
            <li>
              <div className="overflow-hidden rounded-[12px]">
                <img src="/images/banner04.png" className="w-full h-auto" />
              </div>
              <div className="pt-[16px]">
                <strong className="block text-[18px] text-gray-600 font-bold">
                  업무 효율을 높이는 편리한 도구
                </strong>
                <p className="text-[14px] pt-[8px] text-gray-600">
                  원클릭 압축 관리 프로그램 알집, 화면 캡처 도구 알캡처, 파일
                  전송 클라이언트 알드라이브 등 업무를 도와주는 다양한 도구들을
                  만나보세요.
                </p>
              </div>
            </li>
            <li>
              <div className="overflow-hidden rounded-[12px]">
                <img src="/images/banner05.png" className="w-full h-auto" />
              </div>
              <div className="pt-[16px]">
                <strong className="block text-[18px] text-gray-600 font-bold">
                  이미지, 문서, 음악까지 모든 파일 정리
                </strong>
                <p className="text-[14px] pt-[8px] text-gray-600">
                  이미지 뷰어 알씨, 문서 편집기 알PDF, 음악 플레이어 알송으로 내
                  PC에서 생성하는 모든 콘텐츠를 효과적으로 관리해보세요.
                </p>
              </div>
            </li>
            <li>
              <div className="overflow-hidden rounded-[12px]">
                <img src="/images/banner06.png" className="w-full h-auto" />
              </div>
              <div className="pt-[16px]">
                <strong className="block text-[18px] text-gray-600 font-bold">
                  백신으로 내 컴퓨터를 안전하게
                </strong>
                <p className="text-[14px] pt-[8px] text-gray-600">
                  전국민 백신 프로그램 알약! 똑똑한 백신 프로그램 알약으로
                  바이러스, 악성코드를 검사하고 제거해보세요.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
