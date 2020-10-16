<!-- =========================================================================================
File Name: RegisterJWT.vue
Description: Register Page for JWT
----------------------------------------------------------------------------------------
Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
  <div class="clearfix">
    <vs-input
      v-validate="'required|alpha_dash|min:3'"
      data-vv-validate-on="blur"
      label-placeholder="Ingrese su nombre completo"
      name="displayName"
      placeholder="Nombre Completo"
      v-model="displayName"
      class="w-full" />
    <span class="text-danger text-sm">{{ errors.first('displayName') }}</span>

    <vs-input
      v-validate="'required|number'"
      data-vv-validate-on="blur"
      name="numero"
      type="text"
      label-placeholder="Ingrese su número de identificación"
      placeholder="Numero de Identificación"
      v-model="email"
      class="w-full mt-6" />
    <span class="text-danger text-sm">{{ errors.first('numero') }}</span>

    <vs-input
      v-validate="'required|email'"
      data-vv-validate-on="blur"
      name="email"
      type="text"
      label-placeholder="Ingrese su correo electrónico "
      placeholder="Correo Electrónico"
      v-model="email"
      class="w-full mt-6" />
    <span class="text-danger text-sm">{{ errors.first('email') }}</span>

    <vs-input
      v-validate="'required|number'"
      data-vv-validate-on="blur"
      name="tel"
      type="text"
      label-placeholder="Ingrese su número telefonico"
      placeholder="Número telefonico"
      v-model="email"
      class="w-full mt-6" />
    <span class="text-danger text-sm">{{ errors.first('tel') }}</span>

    <vs-input
      v-validate="'required|number'"
      data-vv-validate-on="blur"
      name="usuario"
      type="text"
      label-placeholder="Ingrese su código de usuario"
      placeholder="Código de usuario"
      v-model="email"
      class="w-full mt-6" />
    <span class="text-danger text-sm">{{ errors.first('usuario') }}</span>
    <div>
        <vs-button  type="border" to="/pages/login" class="mt-6 ">ENVIAR</vs-button>
        <vs-button  type="border" to="/pages/login" class="mt-6">IR A INGRESO</vs-button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      displayName: '',
      email: '',
      password: '',
      confirm_password: '',
      isTermsConditionAccepted: true
    }
  },
  computed: {
    validateForm () {
      return !this.errors.any() && this.displayName !== '' && this.email !== '' && this.password !== '' && this.confirm_password !== '' && this.isTermsConditionAccepted === true
    }
  },
  methods: {
    checkLogin () {
      // If user is already logged in notify
      if (this.$store.state.auth.isUserLoggedIn()) {

        // Close animation if passed as payload
        // this.$vs.loading.close()

        this.$vs.notify({
          title: 'Login Attempt',
          text: 'You are already logged in!',
          iconPack: 'feather',
          icon: 'icon-alert-circle',
          color: 'warning'
        })

        return false
      }
      return true
    },
    registerUserJWt () {
      // If form is not validated or user is already login return
      if (!this.validateForm || !this.checkLogin()) return

      const payload = {
        userDetails: {
          displayName: this.displayName,
          email: this.email,
          password: this.password,
          confirmPassword: this.confirm_password
        },
        notify: this.$vs.notify
      }
      this.$store.dispatch('auth/registerUserJWT', payload)
    }
  }
}
</script>
