<template lang="pug">
v-card(class="grey lighten-4 elevation-0")
    v-card-text
      h2 Adhérer
      v-container(fluid)
        v-layout(row)
          v-flex(xs4)
            v-subheader Normal with hint text/label
          v-flex(xs8)
            form(method="POST" action="adhesion")
              v-text-field(
                name="name" 
                label="Nom" 
                id="name"
                dark
              )
              v-text-field(
                name="firstname" 
                label="Prénom" 
                id="firstname"
                dark
              )
              v-flex(x12 sm6)
                v-dialog(
                  persistent
                  v-model="modal2"
                  lazy
                )
                  v-text-field(
                   name="birthdate" 
                   label="Date de naissance" 
                   id="birthdate"
                   type="date"
                   slot="activator"
                   v-model="e6"
                   prepend-icon="access_time"
                   dark
                  )
                  v-date-picker(
                    v-model="e6"
                    actions
                  )
              v-text-field(
                name="adress" 
                label="Adresse" 
                id="adress"
                dark
              )
              v-text-field(
                name="city" 
                label="Ville" 
                id="city"
                dark
              )
              v-text-field(
                name="postal_code" 
                label="Code Postal" 
                id="postal_code"
                dark
              )
              v-text-field(
                name="email_adress" 
                label="Adresse électronique" 
                id="email_adress"
                type="email"
                dark
              )
              v-text-field(
                name="mobile_phone" 
                label="Numéro de mobile" 
                id="mobile_phone"
                dark
              )
              button.btn.btn-primary(type='submit') Valider
</template>

<script>
  export default {
    data () {
      return {
        e6: null,
        menu2: false,
        modal2: false,
      }
    }
  }
</script>