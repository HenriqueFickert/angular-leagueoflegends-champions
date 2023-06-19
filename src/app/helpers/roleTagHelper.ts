export class RoleTagHelper {
    private roleTags: { [name: string]: string } = {
        Assassinos: "Assassin",
        Magos: "Mage",
        Lutadores: "Fighter",
        Tanques: "Tank",
        Atiradores: "Marksman",
        Suportes: "Support"
    };

    private roleTagsUrls: { [name: string]: string } = {
        Assassin: "../../../assets/img/role-tags/Assassin-White.png",
        Mage: "../../../assets/img/role-tags/Mage-White.png",
        Fighter: "../../../assets/img/role-tags/Fighter-White.png",
        Tank: "../../../assets/img/role-tags/Tank-White.png",
        Marksman: "../../../assets/img/role-tags/Marksman-White.png",
        Support: "../../../assets/img/role-tags/Support-White.png"
    };

    public getRoleTag(name: string) {
        if (this.roleTags.hasOwnProperty(name))
            return this.roleTags[name];
        else
            return '';
    }

    public getRoleTagUrl(name: string) {
        if (this.roleTagsUrls.hasOwnProperty(name))
            return this.roleTagsUrls[name];
        else
            return '';
    }
}