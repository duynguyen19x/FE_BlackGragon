<template>
  	<main id="userForm">
		  <h1 class="title">Quản lý người dùng</h1>
      <div class="btnBack">
         <router-link to="/users" class="button">Back</router-link>
      </div>

      <div class="container">
        <!-- <form @submit.prevent="Save()"> -->
        <form>
          <fieldset>
            <div id="id" class="row" hidden>
                <label class="col-sm-2 col-form-label">Id</label>
                <div class="col-sm-10">
                    <input v-model="user.Id" type="text" class="form-control" name="UserId" id="txtUserId">
                </div>
            </div>
            <div class="row">
                <label class="col-sm-2 col-form-label">Mã người dùng: </label>
                <div class="col-sm-10">
                    <input @blur="validate()" v-bind:class="{'is-invalid': errors.Code}" v-model="user.Code" type="text" class="form-control" tabindex="1">
                    <div class="invalid-feedback">{{ errors.Code }}</div>
                </div>
            </div>
            <div class="row">
                <label class="col-sm-2 col-form-label">Tên người dùng: </label>
                <div class="col-sm-10">
                    <input @blur="validate()" v-bind:class="{'is-invalid': errors.Name}" v-model="user.Name" class="form-control">
                    <div class="invalid-feedback">{{ errors.Name }}</div>
                </div>
            </div>
            <div class="row">
                <label class="col-sm-2 col-form-label">Giới tính: </label>
                <div class="col-sm-10">
                    <select @blur="validate()" v-bind:class="{'is-invalid': errors.GenderId}" v-model="user.GenderId" class="form-control">
                        <option value="1">Male</option>
                        <option value="2">Female</option>
                        <option value="3">Other</option>
                    </select>
                    <div class="invalid-feedback">{{ errors.GenderId }}</div>
                </div>
            </div>
            <div class="row">
                <label class="col-sm-2 col-form-label">Địa chỉ: </label>
                <div class="col-sm-10">
                    <input v-model="user.Address" class="form-control">
                </div>
            </div>
            <div class="row">
                <label class="col-sm-2 col-form-label">Email: </label>
                <div class="col-sm-10">
                    <input v-model="user.Email" class="form-control" type="email">
                </div>
            </div>
            <div class="row">
                <label class="col-sm-2 col-form-label">Số điện thoại: </label>
                <div class="col-sm-10">
                    <input v-model="user.PhoneNumber" class="form-control">
                </div>
            </div>
            <div class="row">
                <label class="col-sm-2 col-form-label">Mật khẩu: </label>
                <div class="col-sm-10">
                    <input @blur="validate()" v-bind:class="{'is-invalid': errors.Password}" v-model="user.Password" class="form-control" type="password">
                    <div class="invalid-feedback">{{ errors.Password }}</div>
                </div>
            </div>
            <div class="row">
                <label class="col-sm-2 col-form-label">Loại tài khoản: </label>
                <div class="col-sm-10">
                    <select @blur="validate()" v-bind:class="{'is-invalid': errors.UserType}" v-model="user.UserType" class="form-control">
                        <option value="1">Admin</option>
                        <option value="2">Manager</option>
                        <option value="3">Member</option>
                    </select>
                    <div class="invalid-feedback">{{ errors.UserType }}</div>
                </div>
            </div>
          </fieldset>

          <div class="row div-right">
            <button type="button" v-on:click="Save" class="btn btn-primary col-sm-1" id="btnSave">Save</button>
            <button type="button" class="btn btn-danger col-sm-1" id="btnCancel">Cancel</button>  
          </div>
        </form>
      </div>
	  </main>
</template>

<style scoped>
    .title {
      text-align: center;
    }
    .btnBack {
      text-align: center;
    }
    .container {
      margin-top: 1rem;
    }
    .form-label {
      position: relative;
      display: block;
      float: left;
      padding-top: 7px; 
    }
    .row {
      margin-top: 10px;
      margin-bottom: 10px;
    }
    #btnSave {
      margin-left: 0px;
      margin-right: 5px;
      position: relative;
      float: right;
      min-width: 100px;
    }
    #btnCancel {
      margin-left: 5px;
      margin-right: 12px;
      position: relative;
      float: right;
      min-width: 100px;
    }
    .div-right {
      float: right;
    }
</style>

<script>
  import { uuid } from 'vue-uuid'; 

  export default {
    data() {
      return {
        errors: {
          Code: null,
          Name: null,
          Address: null,
          GenderId: 0,
          PhoneNumber: null,
          Password: null,
          UserType: 0
        },

        user: {
          Id: null,
          Code: null,
          Name: null,
          Address: null,
          GenderId: 0,
          PhoneNumber: null,
          Password: null,
          UserType: 0
        }
      }
    },
    methods: {
      validate() {
        let isValid = true

        this.errors = {
          Code: null,
          Name: null,
          Address: null,
          GenderId: 0,
          PhoneNumber: null,
          Password: null,
          UserType: 0
        };

        if(!this.user.Code) {
          this.errors.Code = "User code is required";
          isValid = false;
        }

        if(!this.user.Name) {
          this.errors.Name = "User name is required";
          isValid = false;
        }

        if(this.user.GenderId <= 0) {
          this.errors.GenderId = "User gender is required";
          isValid = false;
        }

        if(!this.user.Password) {
          this.errors.Password = "User password is required";
          sValid = false;
        }

        if(this.user.UserType <= 0) {
          this.errors.UserType = "User userType is required";
          isValid = false;
        }

        return isValid;
      },

      Save() {
        if(this.validate()) {

        var ssss = this.$uuid.v4();
        console.log(ssss);

        if(!this.user.Id)
          console.log(ssss);

          // this.user.Id = this.$uuid.v4;

          // this.$request.post('http://127.0.0.1:8090/api/user', this.user).then(res => {
          //   console.log(res.data);
          // });
        }
      }
    }
  }
</script>