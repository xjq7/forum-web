import S from './index.module.less';

const articles = new Array(10).fill(0);

export default function Article() {
  return (
    <div className={S.container}>
      <div className={S.articles}>
        {articles.map((article) => {
          return (
            <div className={S.article}>
              <a className={S.item}>{article}</a>
            </div>
          );
        })}
      </div>
    </div>
  );
}
