import React from 'react'
import { Dropdown, Menu , Image} from 'semantic-ui-react'

export default function SignedIn({signOut}) {
  return (
    <div>
      <Menu.Item>
        <Image avatar spaced="right" src="https://media.licdn.com/dms/image/D4D03AQGdtR5w7ZW-1A/profile-displayphoto-shrink_200_200/0/1685982384060?e=1709164800&v=beta&t=YHnSItnC4IB6H9q95Snd6x09v-GhI_fnGsgtVPUsB1w"/>
        <Dropdown pointing="top left" text="Burak">
            <Dropdown.Menu>
                <Dropdown.Item text="Bilgilerim" icon="info"/>
                <Dropdown.Item onClick={signOut} text="Çıkış Yap" icon="sign-out"/>
            </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>
    </div>
  )
}
