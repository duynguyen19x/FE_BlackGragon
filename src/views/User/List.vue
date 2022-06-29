<template>
  	<main id="userForm">
		  <h1 class="title">Danh mục người dùng</h1>
      <div class="btnAddnew">
          <router-link to="/user" class="button">Add</router-link>
      </div>

      <div class="table-responsive">
        <table class="table table-striped table-bordered table-hover table-light">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td colspan="2">Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
      </div>
	  </main>
</template>

<style scoped>
    .title {
      text-align: center;
    }
    .btnAddnew {
      text-align: center;
    }
    .container {
      margin-top: 1rem;
    }
    .table-responsive {
      margin-top: 1rem;
    }
</style>

<script>
  import axios from 'axios';
  import { cacheAdapterEnhancer } from 'axios-extensions';
 
  const http = axios.create({
      baseURL: 'http://127.0.0.1:8090/api/',
      withCredentials: false,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        "Access-Control-Allow-Methods": "DELETE, POST, PUT, GET, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With",
        'Authorization': ''
      },
      adapter: cacheAdapterEnhancer(axios.defaults.adapter)
  });

  export default {
    data() {
      return {
        user: []
      }
    },
    created() {
      this.getUsers();
    },
    methods: {
      getUsers() {
        this.$request.get('http://localhost:8090/api/users').then(res => {
          console.log(res.data)
        })
        // http.get('users').then(res => {
        //    console.log(res.data);
        // });
      }
    }
  }
</script>