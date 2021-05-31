<template>
  <div>
    <!-- <h3 v-if="user">Hi, {{ user.first_name }}{{ user.last_name }}</h3> -->
    <!-- <h3 v-if="!user">You are not login</h3> -->
    <div class="d-flex align-items-center justify-content-around">
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
      <div class="d-flex w-50 h-100">
      <div v-if="isShowSearch" class="container d-flex align-items-center">
        <div >
          <label for="" class="">訂單狀態</label>
          <select v-model="selected">
            <option disabled value="">Select</option>
            <option>進行中</option>
            <option>已完成</option>
          </select>
        </div>

        <b-row class="d-flex flex-column mt-5 m-3" v-if="selected == '進行中'">
          <h4>進行中</h4>
          <b-col
            class="ml-5 w-25 d-flex flex-column"
            v-for="(order, index) in orders"
            :key="index"
          >
            <b-card
            v-if="order.status.code === 1 || order.status.code === 2"
              :img-src="order.logo"
              img-alt="Card image"
              img-left
              class="mb-3 cardimg"
            >
              <!-- v-if="order.status.code === 1 || order.status.code === 2" -->
              <b-card-text>
                {{ order.status.type + "預計出貨日期:" + order.date }}
                <!-- {{ order.status }}
                <br>
                {{ "預計出貨日期:" + order.date }} -->
                <br />
                {{ order.name }}
              </b-card-text>
            </b-card>
          </b-col>
        </b-row>
        <b-row class="d-flex flex-column mt-5 m-3" v-if="selected == '已完成'">
          <h4>已完成</h4>
          <b-col
            class="ml-5 w-50 d-flex flex-column donebox"
            v-for="(order, index) in orders"
            :key="index"
          >
            <b-card
              v-if="order.status.code === 3 || order.status.code === 4"
              :img-src="order.logo"
              img-alt="Card image"
              img-left
              class="mb-3 cardimg"
            >
              <b-card-text>
                {{ order.status.type + "預計出貨日期:" + order.date }}
                {{ order.name }}
              </b-card-text>
            </b-card>
          </b-col>
        </b-row>
      </div>
      <div v-if="isShowCreate" class="d-flex mt-5 flex-column">
          <input class="adddivbox" type="button" value="+" @click="addinputbox" />

        <div  v-for="(item, index) in itemArr" :key="index">
          <label for="">商品名稱 : <input type="text" v-model="name" /></label>
          <br />
          <label for="">圖示連結 : <input type="text" v-model="logo" /></label>
          <br />
          <label for=""
            >訂單狀態 :
            <select v-model="orderstatus">
              <option selected  disabled value="">Select</option>
              <option>進行中</option>
              <option>已完成</option>
            </select>
          </label>
          <br />
          <input type="button" value="新增" @click="add" />
        </div>
        <div>
            <div id="insert">
  <!-- <p>This will be overwritten.</p> -->
</div>
        </div>
      </div>
      </div>
    </div>
  </div>
</template>
<style>
.cardimg {
  padding: 10px;
  width: 350px;
  height: 150px;
}
.cardimg img {
  width: 100px;
  height: 100px;
}
.donebox img {
    filter: grayscale(80%);
}
.adddivbox{
      width: 50px;
    height: 50px;
    border-radius: 50%;
    font-size: 50px;
    line-height: 45px;
    margin-left: 150px;
    margin-bottom: 10px; 
    background-color: blue;
    color: #fff;
}
</style>
<script>
import { mapGetters } from "vuex";
export default {
  name: "Home",
  computed: {
    ...mapGetters(["user"]),
  },
  data() {
    return {
        //  msg: 'this a good ',
        itemArr: [{
        content: 'good'
      }],
      name: "",
      logo: "",
      isShowSearch: true,
      isShowCreate: false,
      selected: "",
      orders: [
        {
          name: "Livi優活 抽取式衛生紙(100抽x10包x10串/箱)",
          logo: "https://static.oopocket.com/store/iconTreemall@3x.png",
          status: {
            code: 3,
            type: "已取消",
          },
          date: "107/6/12",
        },
        {
          name: "BALMUDA The Toaster 百慕達烤麵包機-黑色",
          logo: "https://static.oopocket.com/store/iconTreemall@3x.png",
          status: {
            code: 2,
            type: "已成立",
          },
          date: "108/7/21",
        },
        {
          name: "贈-短慧萬用鍋HD2133+三合一濾網「LG樂金」韓國原裝...",
          logo: "https://static.oopocket.com/store/iconTreemall@3x.png",
          status: {
            code: 1,
            type: "處理中",
          },
          date: "108/6/2",
        },
        {
          name: "Apple AirPds 2",
          logo: "https://static.oopocket.com/store/iconTreemall@3x.png",
          status: {
            code: 4,
            type: "已送達",
          },
          date: "108/3/02",
        },
      ],
    };
  },
  methods: {
      addinputbox() {
this.itemArr.push({
})
            // document.getElementById("insert").innerHTML = "<p>我是新添加的子元素<p>";
                // this.n += 1

            },
    add() {
      var fullDate = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
      var yyyy = fullDate.getFullYear();
      var MM =
        fullDate.getMonth() + 1 >= 10
          ? fullDate.getMonth() + 1
          : "0" + (fullDate.getMonth() + 1);
      var dd =
        fullDate.getDate() < 10 ? "0" + fullDate.getDate() : fullDate.getDate();
      var today = yyyy + "/" + MM + "/" + dd;

      //   return tomorrow;
      this.orders.push({
        name: this.name,
        logo: this.logo,
        status: { code: 3, type: this.orderstatus },
        date: today,
      });
    },
    // del(id) {
    //   this.list.some((item, i) => {
    //     if (item.id == id) {
    //       this.list.splice(i, 1);
    //     }
    //   });
    // },
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
  },
};
</script>