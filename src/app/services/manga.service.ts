export class MangaService{
    
    private _mangas = [
        {
            'id': 0,
            'title': 'Overlord',
            'author': 'Bugane Muuama',
            'desc': 'Nous sommes en l an 2138. Yggdrasil, le célèbre MMORPG à succès est sur le point de fermer. Momonga, nécromancien mort vivant de niveau 100, chef de la puissante guilde Ainz Ooal Gown , attend seul larrêt du jeu. Cependant, l heure de la fermeture passee, Momonga ne se déconnecte pas et les personnages non jouables se retrouvent dotés dune conscience Prisonnier d un monde inconnu, notre seigneur maléfique va partir à la recherche d un nouveau but à son existence et prendre la décision de conquérir ce nouvel univers tout en y laissant son empreinte...',
            'type': 'Seinen',
            'tomes':[
                {
                    'number':0,
                    'chapters':['épisode 01','épisode 02','épisode 03','épisode 04', 'Spécial'],
                },
                {
                    'number':1,
                    'chapters':['épisode 05','épisode 06','épisode 07','épisode 07.5','Spécial']
                },
                {
                    'number':2,
                    'chapters':['épisode 08','épisode 09','épisode 10','Spécial']
                },
                {
                    'number':3,
                    'chapters':['épisode 11','épisode 12','épisode 13','Spécial']
                },
                {
                    'number':4,
                    'chapters':['épisode 14','épisode 15','épisode 16','épisode 17','Spécial']
                },

            ],
        },
        {
            'id': 1,
            'title': 'Blue exorcist',
            'author': 'Kazue Kato',
            'desc': 'Rin okumura, un ado de 15 ans adopté par un exorciste dès son plus jeune âge découvre un jour qu’il est le fils du Malin. Son père, Satan en personne, lui apparaît pour l’emmener dans son monde, mais le jeune garçon ne peut oublier tout ce qui lui a été enseigné jusqu’ici. Afin de venger fujimoto Shirô, son père adoptif, qui s’est sacrifié pour le protéger, Rin décide de combattre le mal par le mal aux côtés des exorcistes, quitte à libérer, en dégainant l’épée paternelle, la puissance démoniaque qui sommeille en lui !',
            'type': 'Shonen',
            'tomes':[]
        },
        {
            'id': 3,
            'title': 'Mob Psycho',
            'author': 'ONE',
            'desc': 'histoire suit Kageyama Shigeo, un élève de quatrième possédant des pouvoirs psychiques. Il peut plier et soulever n importe quel objet avec son esprit. Cependant, il s est lentement refusé d’exercer ses capacités en public car sa trop grande puissance peut infliger des conséquences négatives aux humains "normaux". Aujourd hui, la seule et unique chose qu il désire est de devenir ami avec une fille de son lycée : Tsubomi. Avec son mentor, qui ne possède aucun pouvoir, il continue de vivre paisiblement en essayant de réaliser son but.',
            'type': 'Shonen',
            'tomes':[]
        },
    ];

    public get mangas() {
        return this._mangas;
    }

    public set mangas(value) {
        this._mangas = value;
    }

    getMangaById(id:number){
        return this.mangas[id];
    }

    getTomeById(id:number){
        return this.mangas[id].tomes
    }

}