<script>
export default {
  name: 'About',
};
</script>

<template>
  <main>
    <div class="container">
      <div class="left">
        <div class="cont-img">
          <img src="../../public/img/me.png" alt="" />
        </div>
      </div>
      <div class="right">
        <div class="cont-info">
          <h1>About Me</h1>
          <p>
            Sono un Full-Stack Web Developer e ho sempre nutrito un grande
            interesse per la tecnologia. <br />
            Ho deciso di trasformare questa passione in lavoro e per questo
            motivo ho intrapreso un percorso formativo presso Boolean, dove ho
            affinato le mie competenze lavorando su una vasta gamma di progetti
            sia sul lato back-end che sul front-end. <br />
            Sono ora alla ricerca di un ambiente di lavoro stimolante in cui
            poter esprimere la mia creatività e continuare a imparare
            costantemente.
          </p>

          <div class="footer-info">
            <ul>
              <li>
                <a href="https://www.instagram.com/john_qms/" target="_blank">
                  <i class="fa-brands fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="https://twitter.com/John_qms" target="_blank">
                  <i class="fa-brands fa-x-twitter"></i>
                </a>
              </li>

              <li>
                <a
                  href="https://www.linkedin.com/in/john-henric-quimson-973827280/"
                  target="_blank"
                >
                  <i class="fa-brands fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a href="https://github.com/JohnQuimson" target="_blank">
                  <i class="fa-brands fa-github"> </i>
                </a>
              </li>
            </ul>
            <a
              class="download-btn"
              href="../../public/cv/CV John Henric Quimson.pdf"
              download
            >
              <i class="fa-solid fa-circle-arrow-down"></i> Curriculum
            </a>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">
@use '../assets/scss/style.scss' as *;

main {
  background-color: #0a1930;
  height: calc(100vh - 80px);
  color: white;
  .container {
    display: flex;
    margin: 0 auto;
    padding-top: 100px;

    .left {
      width: 40%;

      .cont-img {
        width: 60%;
        margin: 0 auto;

        img {
          width: 100%;
          height: 100%;
        }
      }
    }

    .right {
      width: 60%;

      .cont-info {
        p {
          padding-top: 50px;
          width: 90%;
          color: #8bb1b3;
        }

        .footer-info {
          width: 90%;
          display: flex;
          justify-content: space-between;
          align-items: center;

          ul {
            display: flex;
            padding: 0;
            margin: 0;
            align-items: center;

            li {
              margin: 0 10px;

              a {
                color: #74c6cc;
                font-size: 30px;

                &:hover {
                  color: #ffc107;
                }
              }
            }
          }
          .download-btn {
            background-color: #ffc107;
            color: black;
            padding: 10px 10px;
            border-radius: 10px;

            &:hover {
              background-color: #ffde7b;
            }
          }
        }
      }
    }
  }
}

a {
  text-decoration: none;
}
</style>
