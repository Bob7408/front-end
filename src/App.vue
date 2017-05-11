<template lang="pug">
  #app
    header
      nav
        .left
          router-link(to='/') Index
          router-link(to='/nous') Nous
          router-link(to='/articles') Blog
          router-link(to='/activites') Activités
          router-link(to='/agenda') Agenda
      
        .right
          router-link(to='/admin') Administration
    
    .content
      transition(name='fade', mode='out-in'): router-view.view
    
    footer
      v-card.box
        v-card-title Contact
        v-card-text
          ul.box
            li: a(href='https://www.facebook.com/ArtSign/') #[v-icon(left) message] Facebook
            li: a(href='https://goo.gl/maps/HpgD3ByKhqG2') #[v-icon(left) business] INJS, 254 rue Saint-Jacques, 75005 Paris
          ul.box
            li: a(href='tel:0153731463') #[v-icon(left) phone] 01 53 73 14 63
            li: a(href='mailto:contact@art-sign.org') #[v-icon(left) mail] contact@art-sign.org

      v-card.box
        v-card-title Partenaires
        v-card-text
          ul.box
            li: a(href='http://www.paris.fr/') Mairie de Paris
            li: a(href='http://www.iledefrance.fr/') Île de France
          ul.box
            li: a(href='http://www.art-pi.fr/') Magazine: Art'Pi
            li: a(href='http://bdtemoinssilencieux.blogspot.fr/') BD: Les Témoins Silencieux
      
      span.infos
        a(href='https://github.com/6A/art-sign') Source
        |  - 
        v-dialog(v-model='dpresse', width='auto')
          a(href='javascript:void(0);', slot='activator') Presse
          v-card
            v-card-row: v-card-title Presse
            v-divider
            v-card-row: v-card-text: v-list(two-line)
              v-list-item: v-list-tile: v-list-tile-content
                v-list-tile-title Français facile dans le site d'Ouest France
                v-list-tile-sub-title Echo Magazine n°789 - Mars 2012
              v-list-item: v-list-tile: v-list-tile-content
                v-list-tile-title Art'Sign récompensé
                v-list-tile-sub-title Echo Magazine n°807 - Janvier 2014
            v-divider
            v-card-row(actions)
              v-btn(flat, @click.native='dpresse = false') Fermer
        |  - 
        v-dialog(v-model='dgive', width='auto')
          a(href='javascript:void(0);', slot='activator') Faire un don
          v-card
            v-card-row: v-card-title Faire un don
            v-divider
            v-card-row: v-card-text: v-list(two-line)
              v-list-item: v-list-tile: v-list-tile-content
                v-list-tile-title Les entreprises
                v-list-tile-sub-title.
                  Les dons effectués par une entreprise soumise à l'impôt sur les sociétés ou à l'impôt sur le revenu peuvent ouvrir droit à une réduction d'impôt égale à 60% des sommes versées.
              v-list-item: v-list-tile: v-list-tile-content
                v-list-tile-title Les particuliers
                v-list-tile-sub-title.
                  Les dons ouvrent droit à une réduction d'impôt égale à 66% des versements, dans la limite de 20% du revenu imposable. #[br]
                  A réception d'un don, Art'Sign fera parvenir au donateur un "Reçu de dons aux oeuvres" dûment rempli.
            v-card-row
              v-card-text: a(href='/public/donner.pdf') Télécharger le formulaire en cliquant ici.
            v-card-row
              v-card-text: a(href='https://www.paypal.com/cgi-bin/webscr?hosted_button_id=UTWAPA6V8NHSU&cmd=_s-xclick') Donner avec PayPal
            v-divider
            v-card-row(actions)
              v-btn(flat, @click.native='dgive = false') Fermer
</template>

<script>
export default {
  data() {
    return {
      dpresse: false
    }
  }
}
</script>

<style lang="stylus">
body
  font-family -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  font-size 15px
  margin 0
  color #34495e
  overflow-y scroll

  #app
    width: 100%
    height: 100%
    position: absolute

header, footer
  background: $blue
  width: 100%
  margin: 0
  min-height: 10vh

header
  position: fixed
  top: 0
  left: 0
  right: 0
  z-index: 9

  nav
    center()

    .left
      float: left
    .right
      float: right

    a
      display: inline-block
      margin: 1em

footer
  color: white
  overflow: auto
  padding: 2em
  font-size: 1.1em
  text-align: center

  h2
    text-transform: uppercase
    letter-spacing: .05em
    font-weight: 100

  .box
    display: inline-block
    color: $primary-text
    padding-bottom: .6em
    column(1/2)

    &:last-of-type
      margin-right: 0%

    li
      list-style: none

    a
      display: flex
      align-items: center
      text-decoration: none
      padding: .2em 1em

  .icon
    margin-right: 16px

  .infos
    margin: .8em 0 0 0
    display: inline-block
    
    a
      vertical-align: top

  .dialog
    color: $primary-text

.content
  center()
  margin-top: 10vh
  min-height: 90vh
  text-align: center

  .progress-circular
    position: relative
    text-align: center
    display: inline-block
    margin-top: 20vh

.header
  background-color #ff6600
  position fixed
  z-index 999
  height 55px
  .inner
    max-width 800px
    box-sizing border-box
    margin 0px auto
    padding 15px 5px
  a
    color rgba(255, 255, 255, .8)
    line-height 24px
    transition color .15s ease
    display inline-block
    vertical-align middle
    font-weight 300
    letter-spacing .075em
    margin-right 1.8em
    &:hover
      color #fff
    &.router-link-active
      color #fff
      font-weight 400
    &:nth-child(6)
      margin-right 0
  .github
    color #fff
    font-size .9em
    margin 0
    float right
.logo
  width 24px
  margin-right 10px
  display inline-block
  vertical-align middle
.fade-enter-active, .fade-leave-active
  transition all .2s ease
.fade-enter, .fade-leave-active
  opacity 0
@media (max-width 860px)
  .header .inner
    padding 15px 30px
@media (max-width 600px)
  body
    font-size 14px
  .header
    .inner
      padding 15px
    a
      margin-right 1em
    .github
      display none
</style>
