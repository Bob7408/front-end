<template lang="pug">
  #app
    header
      nav
        .left
          router-link(to='/') Index #[.border]
          router-link(to='/nous') Qui sommes-nous ? #[.border]
          router-link(to='/articles') Blog #[.border]
          router-link(to='/activites') Nos activités #[.border]
          router-link(to='/participation') Participez ! #[.border]
          router-link(to='/services') Nos services #[.border]
          router-link(to='/agenda') Agenda #[.border]
          
          router-link(to='/contact') Contact #[.border]
          router-link(to='/adhesion') Adhésion #[.border]
      
        .right
          a(href='/admin'): v-icon(title='Administration') vpn_key
    
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
            li: a(href='http://www.paris.fr/') #[v-icon(left) account_balance] Mairie de Paris
            li: a(href='http://www.iledefrance.fr/') #[v-icon(left) account_balance] Île de France
          ul.box
            li: a(href='http://www.art-pi.fr/') #[v-icon(left) book] Magazine: Art'Pi
            li: a(href='http://bdtemoinssilencieux.blogspot.fr/') #[v-icon(left) book] BD: Les Témoins Silencieux

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
            v-card-row: v-card-title #[v-icon.red--text(left) favorite] Faire un don
            v-divider
            v-card-row: v-card-text(style='text-align: justify')
              p.title Les entreprises
              p.
                Les dons effectués par une entreprise soumise à l'impôt sur les sociétés ou à l'impôt sur le revenu peuvent ouvrir droit à une réduction d'impôt égale à 60% des sommes versées.
              br
              p.title Les particuliers
              p.
                Les dons ouvrent droit à une réduction d'impôt égale à 66% des versements, dans la limite de 20% du revenu imposable. #[br]
                A réception d'un don, Art'Sign fera parvenir au donateur un "Reçu de dons aux oeuvres" dûment rempli.
            v-card-row
              v-card-text
                v-btn(light, flat): a(href='/public/donner.pdf', target='_blank') Télécharger le formulaire (.pdf)
                br
                v-btn(light, flat): a(href='https://www.paypal.com/cgi-bin/webscr?hosted_button_id=UTWAPA6V8NHSU&cmd=_s-xclick', target='_blank') Donner avec PayPal
            v-divider
            v-card-row(actions)
              v-btn(flat, @click.native='dgive = false') Fermer
</template>

<script>
export default {
  data() {
    return {
      dgive: false,
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
  display: flex
  align-items: center
  top: 0
  left: 0
  right: 0
  z-index: 9

  nav
    center()
    width: 100%
    color: white

    .left
      float: left
    .right
      float: right

    a
      display: inline-block
      margin: 1em
      opacity: .9

      &.link-active
        opacity: 1

      &:hover .border
        transform: translateY(3px)

      .border
        bottom: 0
        left: 0
        width: 100%
        height: 2px
        background: #ffffff
        transition: all 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94)
        opacity: .8

footer
  color: white
  overflow: auto
  padding: 2em
  font-size: 1.1em
  text-align: center

  & > *
    min-width: 512px


  h2
    text-transform: uppercase
    letter-spacing: .05em
    font-weight: 100

  .box
    display: inline-block
    color: $primary-text
    padding-bottom: .6em
    width: 46%
    margin: 0 1% 0 0

    &.card
      min-width: 512px
      margin: 0 1% .4em 0
      text-align: left

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
    text-align: center
    
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
</style>
