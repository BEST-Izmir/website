import TeamCard from './TeamCard/TeamCard';
import styles from './Team.module.scss';

function Team(props) {
  return (
    <section className={styles.team} id="team">
      <div className="container">
        <h3 className={styles['section-title']}>Takım</h3>
        <div className={styles['section-content']}>
          <TeamCard
            imgUrl="/static/ekin.jpg"
            mail="abaliogluekin@gmail.com"
            duty="BEST Izmir IT Takımı Koordinatörü"
            name="Ekin Abalıoğlu"
          />
          <TeamCard
            imgUrl="/static/ataberk.jpg"
            mail="ataberk.kartalmis@gmail.com"
            duty="BEST Izmir Yönetim Kurulu Saymanı"
            name="Ataberk Kartalmış"
          />
          <TeamCard
            imgUrl="/static/berk.jpg"
            duty="BEST Izmir Yönetim Kurulu Başkanı
BEST Izmir Temsilcisi"
            name="Berk Kocakahya"
            mail="byzrz91@gmail.com"
          />
          <TeamCard
            imgUrl="/static/emrecan.jpg"
            duty="BEST Izmir Dizayn Takımı Koordinatörü"
            mail="emrecancimen@gmail.com"
            name="Emrecan Çimen"
          />
          <TeamCard
            imgUrl="/static/irem.jpg"
            mail="iremalpcetin@gmail.com"
            duty="BEST Izmir Yönetim Kurulu Sekreteri"
            name="İrem Alpçetin"
          />
        </div>
      </div>
    </section>
  );
}

export default Team;
