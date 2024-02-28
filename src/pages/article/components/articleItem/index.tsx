import { IArticle } from '~/api/article';
import S from './index.module.less';

interface Props extends IArticle {}

export default function ArticleItem(props: Props) {
  const { title } = props;
  return (
    <div className={S.article}>
      <div className={S['article-item']}>
        <div className={S['item-content']}>
          <div className={S.user}>
            <div className={S.avatar}></div>
            <div className={S.name}>xjq7</div>
          </div>
          <div className={S.title}>TODO（待办）新功能上线啦 ！！！ 🎉🎉🎉</div>
          <div className={S.desc}>
            地址：[https://www.developers.pub/todo/doing](https://www.developers.pub/todo/doing)
            使用场景 生活中
            帮忙取快递提醒：下班路过小区快递点，帮家人取个快递，家人可以分配个任务给你，在你快到家的时间定时提醒不要忘记；
            重要日期提醒：生活中重要的时刻（生日、纪念日等），可以提前创建好任务，做好定时提醒别错过；
            待办事项提醒：生活中看到的一些好看的电影，记录下来周末找个完整的时间刷一刷；
            记录想法：生活中随时冒出来的一些奇思妙想，可能过会就会忘掉，可以快速记录下来，事后回顾；
            工作中
            自动生成日报并推送：工作中每天都需要写日报，可以把当天的工作罗列出来，当天工作内容更明确，效率更高，下班点还会自动生成并推送日报；
            自动生成周报并推送：工作中每周都需要写周报，本周完成的工作，在本周结束后，自动生成周报并推送，高效快捷，还不会遗忘；
            工作内容定期回顾总结：自定义时间范围，项目标签等统计任务，做工作复盘总结，不断反思进步；
            功能列表 个人使
          </div>
        </div>
        <img className={S.thumbnail} />
      </div>
      <div className={S.operation}></div>
    </div>
  );
}
