import styles from './about.module.scss';
import EuMap from '../EuMap';

function about() {
  return (
    <section className={styles.about} id="about">
      <div className="container">
        <h3 className={styles['section-title']}>Best Nedir?</h3>
        <div className={styles['section-content']}>
          <div className={styles.article}>
            <p>
              BEST, 1989 yılından beri büyüyen bir aile. Apolitik ve gönüllülük esaslı yapısı ile kurulduğundan beri
              Avrupa çapında 34 farklı ülkede, 97 farklı üniversitede öğrencilere eğitim, ekip çalışması ve birçok
              seyahat fırsatı sağlıyor.
            </p>
            <p>
              BEST, çalışma sistemi ile öğrencilerin, öğrenci kalarak şirket yaşamını tecrübe etmelerine olanak tanır.
              İmkan tanıdığı ekip çalışması, arkadaşlık, kriz, değişim ve zaman yönetimi uğraşları sayesinde
              öğrencilerin kalifiye olmalarını sağlar. Organizasyonlarıyla, amblemimizi de şekillendiren; Partnerler,
              Öğrenciler ve Üniversiteler arasında sağlıklı ve sürdürülebilir bir ortam yaratır.
            </p>
          </div>
          <EuMap width={400} height={400} />
        </div>
      </div>
    </section>
  );
}

export default about;
