<template>
  <div class="ecommerce-widget">
    <div class="row" style="height: 100%">
      <div class="col-xl-10 col-lg-10 col-md-10 col-sm-11 col-12" style="margin: 0 auto;">
        <div class="card" style="height: 95%;">
          <b-tabs v-model="tabIndex" card>
            <div class="card-body">
              <b-card img-src="./images/profile-arav3.png" img-alt="Card image" img-height="600px" img-left class="mb-3" style="height: 900px;">
                <b-card-text style="line-height: 200%">
                  <b-tab title="Korean" :title-link-class="linkClass(0)"><p v-html="korean"></p></b-tab>
                  <b-tab title="English" :title-link-class="linkClass(1)"><p v-html="english"></p></b-tab>
                  <b-tab title="Deutsch" :title-link-class="linkClass(2)"><p v-html="deutsch"></p></b-tab>
                </b-card-text>
                <b-img src="./images/github_icon.png" fluid alt="Responsive image" style="width: 30px; margin-left: 20px;"></b-img>
                <b-badge href="#" variant="info">https://github.com/arav-easy1</b-badge>
              </b-card>
            </div>
          </b-tabs>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tabIndex: 0,
      korean: `개발자로서의 성장과정을 담아가고 싶은 블로그. 내가 배운 것,
            내가 한 것, 하고 싶은 것 등을 이곳에 올리고싶다.
            <br />
            ARAV라는 이름은 내가 처음 개발을 배우게 된 학원에서 친구들이 지어준
            별명이다. 뜻은 평화로운, 지혜(peaceful, wisdom).
            <br />
            실명인 이지원(a.k.a. Easy1)보다 그 당시에 더 자주 불렸다.
            <br />
            <br />
            개발이란 것을 알게되고 개발자란 직업을 꿈꾸게 되기까지는 얼마 되지
            않았다.
            <br />
            졸업하기 직전까지도 전공(환경공학)에 도저히 흥미가 생기지 않아서
            막학기와 독일어학원을 병행한 후에, 졸업식 3일 후인 2016년 8월에
            독일행 비행기에 올랐다.
            <br />
            베를린에서 1년 6개월 정도 있으면서 독일어를 배우고 베를린
            자유대학에서 컴퓨터과학 전공을 하는 친구를 만나 이야기를 나누며
            개발에 대한 흥미를 갖게 되었다. 그 친구 도움으로 강의도 몇번
            청강해보고 정말 좋은 경험이었다. (잘 알아듣진 못했지만ㅎㅎ)
            <br />
            그렇게 개발자의 길을 가기로 마음을 먹었으나, 생각지도 못한 시련이
            있었다.
            <br />
            내가 독일에서 개발자가 되기 위해서는 적어도 컴퓨터관련학사는
            되어야하는데, 나는 비전공자이므로 아예 대학교 학사를 다시 시작해야만
            했다.
            <br />
            고민하던 중에 한국에서는 국비지원학원에서 비전공자도 개발을 배워서
            취업이 가능하다는 것을 알게되었다.
            <br />
            그렇게 한국에 돌아와 2019년 11월에 정보처리기사를 취득한 후에,
            12월부터 국비지원학원에서 Java를 기반으로 풀스택개발자의 기초를
            닦아주는 강의를 듣게 되었다.
            <br />
            그렇게 나의 개발인생이 시작되었다.
            <br />`,
      english: `This is a blog that I want to contain my growth as a developer. I
            want to post what I have learned, what I have made, and what I want
            to do. ARAV is a nickname my friends gave me at the academy where I
            first learned to develop. It means peaceful and wisdom. It was
            called more often at the time than my real name, Lee Jiwon(a.k.a.
            Easy1).
            <br />
            <br />
            Not long after I started getting to know a develop and dreaming of a
            job as a developer.
            <br />I was not interested in my major(environmental engineering)
            until I graduated, so I went to Germany in August 2016, three days
            after the graduation ceremony, to think about my career path.
            <br />I was in Berlin for about a year and a half, learning German,
            and having a conversation with a friend who majored in computer
            science at the Free University of Berlin, I became interested in
            development. It was a great experience to take a few times lectures
            with his help.
            <br />I decided to study development, but something unexpected
            happened.
            <br />
            To become a developer in Germany I must have at least a
            computer-related bachelor's degree. but I don't have. Meanwhile, I
            heard that in a government funded academy in Korea could learn to
            programming for even non-majors.
            <br />
            After that, in November 2019, I obtained the certificate of Engineer
            Information Processing. And from December 2019, I started learning
            in academy that trains full-stack developers based on Java.
            <br />
            That is how my development life began.
            <br />`,
      deutsch: `Das ist ein Blog, in dem ich mein Werdegang als Entwickler
            aufschreiben möchte. ich möchte schreiben doch auf, was ich gelernt
            habe, was ich gemacht habe, und was ich machen möchte. ARAV ist ein
            Spitzname, den mir meine Freunde an der Akademie gegeben haben, an
            der ich zum ersten Mal gelernt habe, mich zu entwickeln. Es bedeutet
            friedlich und Weisheit. Es wurde zu der Zeit öfter genannt als mein
            richtiger Name, Lee Jiwon(a.k.a. Easy1).
            <br />
            <br />
            Nicht lange nachdem ich angefangen hatte, eine Entwicklung
            kennenzulernen und von einem Job als Entwickler zu träumen.
            <br />
            Mein Hauptfach (Umweltingenieurwesen) interessierte ich nicht mich
            erst nach meinem Abschluss. Deshalb ging ich im August 2016, drei
            Tage nach der Abschlussfeier, nach Deutschland, um über meinen
            Karriereweg nachzudenken.
            <br />
            Ich war ungefähr anderthalb Jahre in Berlin, lernte Deutsch und
            kennte einem Freund, der an der Freien Universität Berlin Informatik
            studierte, und interessierte mich für Entwicklung.
            <br />
            Ich beschloss, Entwicklung zu studieren, aber etwas Unerwartetes
            passierte.
            <br />
            Um Entwickler in Deutschland zu werden, muss ich mindestens einen
            computerbezogenen Bachelor-Abschluss haben. aber ich habe nicht. In
            der Zwischenzeit hörte ich, dass in einer von der Regierung
            finanzierten Akademie in Korea das Programmieren auch für
            Nicht-Majors lernen könnte.
            <br />
            Danach erhielt ich im November 2019 das Zertifikat für
            Ingenieurinformationsverarbeitung. Und ab Dezember 2019 begann ich
            in einer Akademie zu lernen, die Full-Stack-Entwickler auf
            Java-Basis ausbildet.
            <br />
            So begann mein Entwicklungsleben.
            <br />`,
    };
  },
  methods: {
    // getKor() {
    //   this.language = this.korean;
    // },
    // getEng() {
    //   this.language = this.english;
    // },
    // getDeu() {
    //   this.language = this.deutsch;
    // },
    linkClass(idx) {
      if (this.tabIndex === idx) {
        return ["bg-primary", "text-light"];
      } else {
        return ["bg-light", "text-info"];
      }
    },
  },
};
</script>
