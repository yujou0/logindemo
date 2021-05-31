<template>
          <b-navbar type="dark" variant="white">
        <!-- Navbar dropdowns -->
        <b-nav-item-dropdown text="訂單管理">
          <b-dropdown-item href="#" @click="showOrHidesearch"
            >訂單查詢</b-dropdown-item
          >
          <b-dropdown-item href="#" @click="showOrHidecreate"
            >新增訂單</b-dropdown-item
          >
        </b-nav-item-dropdown>
      </b-navbar>
</template>

<script>
export default {
    name: 'Sidebar',
    methods: {
    showOrHidesearch: function () {
      // 取反
      this.isShowSearch = !this.isShowSearch;
      if (this.isShowSearch !== false) {
        this.isShowCreate == false;
      } else {
        this.isShowCreate !== false;
      }
    },

    showOrHidecreate: function () {
      // 取反
      this.isShowCreate = !this.isShowCreate;
      // this.isShowSearch = !this.isShowSearch;
      if (this.isShowCreate !== false) {
        this.isShowSearch == false;
      } else {
        this.isShowSearch !== false;
      }
    },
}
}

</script>