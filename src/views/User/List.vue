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
              <th scope="col">Code</th>
              <th scope="col">Name</th>
              <th scope="col">Address</th>
              <th scope="col">GenderId</th>
              <th scope="col">PhoneNumber</th>
              <th scope="col">Password</th>
              <th scope="col">UserType</th>
            </tr>
          </thead>
          <tbody>
            <tr :key="index" v-for="(user, index) in users">
              <th scope="row">{{ user.Id }}</th>
              <td>{{ user.Code }}</td>
              <td>{{ user.Name }}</td>
              <td>{{ user.Address }}</td>
              <td>
                <select disabled v-model="user.GenderId">
                  <option value="1">Male</option>
                  <option value="2">Female</option>
                  <option value="3">Other</option>
                </select>
              </td>
              <td>{{ user.PhoneNumber }}</td>
              <td>{{ user.Password }}</td>
              <td>
                <select disabled v-model="user.UserType">
                  <option value="1">Administrator</option>
                  <option value="2">User</option>
                </select>
              </td>
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
  export default {
    data() {
      return {
        users: [],
      }
    },
    created() {
      this.getUsers();
    },
    methods: {
      getUsers() {
        this.$request.get('http://127.0.0.1:8090/api/users').then(res => {
          this.users = res.data.result.users;
          console.log(res.data.result.users);
        })
      }
    }
  }
</script>