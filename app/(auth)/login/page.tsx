import Link from 'next/link';

export default function Login() {
  return (
    <main className="flex justify-center items-center min-h-[100vh] pt-[80px] pb-[100px]">
      <div className="w-full">
        <div className="mx-auto max-w-[400px]">
          <div className="text-center mb-[40px]">
            <h2 className="inline-block w-[121px] h-[30px] bg-[url('/images/icons/loginlogo.svg')] bg-[50%_50%] bg-[100%_auto] bg-no-repeat"></h2>
            <p className="text-[18px] font-semibold pt-[30px] text-gray-600">
              로그인하고 더 많은 혜택과 서비스를 누리세요!
            </p>
          </div>
          <div>
            <Link
              href="https://nid.naver.com/oauth2.0/authorize?client_id=2fSNK22aXkmNJ3LtVLDt&scope=openid&response_type=code&redirect_uri=https%3A%2F%2Faltools.co.kr%2Fapi%2Fauth%2Fcallback%2Fnaver&state=r4U0CV5PejKZn5px8IIgRnsNS3y-EurqXztC73Q2NJM"
              className="text-[#fff] bg-[#03c75a] flex justify-center items-center h-[52px] text-center font-bold rounded-[8px] relative"
            >
              <img
                src="/images/naver.png"
                alt="네이버"
                className="w-[32px] h-[32px] absolute top-[10px] left-[20px]"
              />
              네이버 로그인
            </Link>
            <Link
              href="https://accounts.kakao.com/login/?continue=https%3A%2F%2Fkauth.kakao.com%2Foauth%2Fauthorize%3Fclient_id%3Dbb57cd0a0bb55ddc7c6ab4ad366e010d%26scope%3D%26response_type%3Dcode%26redirect_uri%3Dhttps%253A%252F%252Faltools.co.kr%252Fapi%252Fauth%252Fcallback%252Fkakao%26state%3DMmx7Y0VI5oi1RkZLI3E-Eqj-GKQcADZp55S6qoZzM3Q%26through_account%3Dtrue&talk_login=hidden#login"
              className="text-[#1a1a1a] bg-[#fee500] flex justify-center items-center h-[52px] text-center font-bold rounded-[8px] relative mt-[8px]"
            >
              <img
                src="/images/kakao.png"
                alt="카카오"
                className="w-[32px] h-[32px] absolute top-[10px] left-[20px]"
              />
              카카오 로그인
            </Link>
            <Link
              href="https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?client_id=823102899570-gjsi2i9da22iaihlnmc10hafnqo1dmj9.apps.googleusercontent.com&scope=openid%20email%20profile&response_type=code&redirect_uri=https%3A%2F%2Faltools.co.kr%2Fapi%2Fauth%2Fcallback%2Fgoogle&state=Lm6_V123Hu-3Pqehg_WsPxPTWCHnSGesZSVPg_C-TXQ&code_challenge=PyVuQjSLxax2El0c7IAyaJ0yBipW5Au9UES6qdOP_jY&code_challenge_method=S256&service=lso&o2v=2&flowName=GeneralOAuthFlow"
              className="text-[#1a1a1a] bg-[#f2f4f6] flex justify-center items-center h-[52px] text-center font-bold rounded-[8px] relative mt-[8px]"
            >
              <img
                src="/images/google.png"
                alt="구글"
                className="w-[32px] h-[32px] absolute top-[10px] left-[20px]"
              />
              구글 로그인
            </Link>
            <Link
              href="https://appleid.apple.com/auth/authorize?client_id=com.apluspoint.loginIdentifier&scope=name%20email&response_type=code&redirect_uri=https%3A%2F%2Faltools.co.kr%2Fapi%2Fauth%2Fcallback%2Fapple&response_mode=form_post&code_challenge=NSX507fOWSb058PJeYnr0WnGhhIUJTYDwDHhTNdwxQI&code_challenge_method=S256"
              className="text-[#fff] bg-[#1a1a1a] flex justify-center items-center h-[52px] text-center font-bold rounded-[8px] relative mt-[8px]"
            >
              <img
                src="/images/apple.png"
                alt="애플"
                className="w-[32px] h-[32px] absolute top-[10px] left-[20px]"
              />
              Apple 로그인
            </Link>
          </div>
          <div className="flex justify-between items-center mt-[24px]">
            <Link href="/forgot-password">아이디 찾기</Link>
            <Link href="/forgot-password">
              <button className="h-auto text-[15px] flex justify-center items-center font-bold gap-[4px] after:w-[8px] after:h-[8px] after:content[''] after:border-r-2 after:border-[#08f] after:border-b-2 after:transform after:rotate-[-45deg] text-[#08f]">
                아이디 로그인
              </button>
            </Link>
          </div>
          <div className="h-[255px] mt-[40px]">
            <div className="max-w-[720px] text-center border border-[#d1d6db] rounded-[8px] mx-auto pt-[32px] pb-[48px]">
              <h3 className="text-[15px] px-[20px] font-semibold">
                EST 회원이 되면?
              </h3>
              <p className="pt-[8px] px-[20px] text-[14px] text-[#4e5968]">
                알툴즈, 앨런 등 EST의 AI 서비스와
                <br />
                리워드 포인트를 이용할 수 있습니다.
              </p>
              <div className="h-[60px] mt-[40px] border"></div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
