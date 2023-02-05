<template>
  <t-layout>
    <t-aside>
      <t-menu theme="light" value="dashboard">
        <img slot="logo" width="136" src="https://www.tencent.com/img/index/menu_logo_hover.png" />
        <t-menu-item value="dashboard"> <icon slot="icon" name="dashboard" />仪表盘 </t-menu-item>
        <t-menu-item value="resource"> <icon slot="icon" name="server" />资源列表 </t-menu-item>
        <t-menu-item value="root"> <icon slot="icon" name="root-list" />根目录 </t-menu-item>
        <t-menu-item value="control-platform"> <icon slot="icon" name="control-platform" />调度平台 </t-menu-item>
        <t-menu-item value="precise-monitor"> <icon slot="icon" name="precise-monitor" />精准监控 </t-menu-item>
        <t-menu-item value="mail"> <icon slot="icon" name="mail" />消息区 </t-menu-item>
        <t-menu-item value="user-circle"> <icon slot="icon" name="user-circle" />个人中心 </t-menu-item>
        <t-menu-item value="play-circle"> <icon slot="icon" name="play-circle" />视频区 </t-menu-item>
        <t-menu-item value="edit1"> <icon slot="icon" name="edit-1" />资源编辑 </t-menu-item>
      </t-menu>
    </t-aside>
    <t-layout>
      <t-header>
        <t-head-menu value="item1">
          <t-menu-item value="item1">已选内容</t-menu-item>
          <t-menu-item value="item2">菜单内容一</t-menu-item>
          <t-menu-item value="item3">菜单内容二</t-menu-item>
          <t-menu-item value="item4" :disabled="true">菜单内容三</t-menu-item>
          <template #operations>
            <a href="javascript:;"><icon class="t-menu__operations-icon" name="search" /></a>
            <a href="javascript:;"><icon class="t-menu__operations-icon" name="notification-filled" /></a>
            <a href="javascript:;"><icon class="t-menu__operations-icon" name="home" /></a>
          </template>
        </t-head-menu>
      </t-header>
      <t-content>
        <router-view />
        <t-footer>Copyright @ 2019-{{ new Date().getFullYear() }} Tencent. All Rights Reserved</t-footer>
      </t-content>
    </t-layout>
  </t-layout>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';
import { Icon } from 'tdesign-icons-vue';
import Example from '@/api/example';

export default {
  components: {
    Icon,
  },
  data() {
    return {
      // username: '',
      // password: '',
    };
  },
  computed: {
    ...mapState('example', ['username', 'password']),
    ...mapGetters('example', ['user']),
  },
  created() {
    // mutations
    this.syncUser({ username: 'ali-pay', password: 'ali-pay' });
    this.$store.commit('example/syncUser', { username: 'ali-pay', password: 'ali-pay' });

    // actions
    this.asyncUser({ username: 'ali-pay', password: 'ali-pay' });
    this.$store.dispatch('example/asyncUser', { username: 'ali-pay', password: 'ali-pay' });

    // state
    console.log('mapState username:', this.username);
    console.log('mapState password:', this.password);
    console.log('username:', this.$store.state.example.username);
    console.log('password:', this.$store.state.example.password);

    // getters
    console.log('mapGetters user:', this.user);
    console.log('getters user:', this.$store.getters['example/user']);
  },
  methods: {
    ...mapMutations('example', ['syncUser']),
    ...mapActions('example', ['asyncUser']),

    // api
    async login() {
      const res = await Example.login(this.username, this.password);
      console.log(res);
    },
  },
};
</script>

<style lang="less" scoped>
/deep/ .t-head-menu__inner {
  border-bottom: 1px solid var(--td-component-stroke);
}

.t-menu__logo img {
  margin-left: 24px;
}

.t-layout__content {
  height: calc(100vh - var(--td-comp-size-xxxl));
  padding: 24px 24px 0;
  overflow-y: scroll;
}

.t-layout__footer {
  text-align: center;
}
</style>
