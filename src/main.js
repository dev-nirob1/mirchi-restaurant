import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'

import BaseButton from './components/element/BaseButton.vue'
import BaseImage from './components/element/BaseImage.vue'
import BaseParagraph from './components/element/BaseParagraph.vue'
import BaseTable from './components/element/BaseTable.vue'
import BaseTextArea from './components/element/BaseTextArea.vue'
import BaseTitle from './components/element/BaseTitle.vue'
import HeroTitle from './components/element/HeroTitle.vue'
import InputField from './components/element/InputField.vue'
import ListItem from './components/element/ListItem.vue'
import SelectDropdown from './components/element/SelectDropdown.vue'
import SubTitle from './components/element/SubTitle.vue'
import TableHeader from './components/element/TableHeader.vue'
import TableRow from './components/element/TableRow.vue'

const app = createApp(App)

app.component('BaseButton', BaseButton)
app.component('BaseImage', BaseImage)
app.component('BaseParagraph', BaseParagraph)
app.component('BaseTable', BaseTable)
app.component('BaseTextArea', BaseTextArea)
app.component('BaseTitle', BaseTitle)
app.component('HeroTitle', HeroTitle)
app.component('InputField', InputField)
app.component('ListItem', ListItem)
app.component('SelectDropdown', SelectDropdown)
app.component('SubTitle', SubTitle)
app.component('TableHeader', TableHeader)
app.component('TableRow', TableRow)

app.use(router)

app.mount('#app')
