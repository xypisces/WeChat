<script>
    import internship from "./internship.vue";
    import message from "./message.vue";
    import school from "./school.vue";
    import skills from "./skills.vue";
    export default {
        components:{
            message,
            school,
            skills,
            internship
        }


    }
</script>

<template>
  <aside class="aside">
      <img class="aside-img" src="../images/head.jpg">
      <h1>刘十九</h1>
      <h3>前端工程师</h3>
      <p><i class="teal call square icon"></i><span>15626830523</span></p>
      <p><i class="teal wechat icon"></i><span>xy953945582</span></p>
      <p><i class="teal mail icon"></i><span>xypisces@163.com</span></p>
      <p><i class="teal github icon"></i><span>github.com/xypisces</span></p>

      <ul class="aside-ul">
        <a v-link="{ name: 'internship' }"><li>实习经历</li></a>
        <a v-link="{ name: 'skills' }"><li>相关技能</li></a>
        <a v-link="{ name: 'school' }"><li>校园经历</li></a>
        <a v-link="{ name: 'message' }"><li>博客文章</li></a>
      </ul>
    </aside>
    <section class="section">
      <router-view></router-view>
    </section>
</template>