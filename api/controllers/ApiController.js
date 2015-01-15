/**
 * ApiController
 *
 * @description :: Server-side logic for managing apis
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */
var Promise = require('bluebird');

var ids = 'IndonesiaGaruda,MerpatiAirways,LionAirIndo,bataviaair,tigerairmandala,Citilink,BatikAir,Kalstar_Online,PelitaAirlines,Sky_Aviation,SriwijayaAir,trigana_air,lionairnews,Trans7OnTheSpot,TRANS_IMB,HitamPutihT7,IndonesianIdol,liputan6dotcom,inserttranstv,MataNajwa,KickAndyShow,MarioTeguhFB,dahSyatMusik,InboxSCTV_,TheComment_NET,bukan4mata,Ini_Talkshow,TonightShow_NET,TMG_NET,FTV_SCTV,wideshotmetrotv,sketsatranstv,standupmetrotv,ceriwis_transtv,HomestayTrans7,Isengbanget_T7,BSWayang_NET,86_NetTV,myTrip_myAdvntr,Kartu_As,Telkomsel,simPATI,XLCare,IndosatCare,IndosatMania,smartfrenworld,AXISgsm,XL123,untungpakeesia,triindonesia,FlexiIrit,bankmandiri,bukopinsiaga,BANKBRI_ID,BANKBTN_ID,XpresiBCA,bank_jateng,kas_pm,BNI46,bukopinsiaga,kartudanamon,CIMBIndonesia,bankocbcnisp,joylivingPB,syariahmandiri,TweetBMS,BankSinarmas,BSyariahBukopin,PT_Bankbtpn,BNISyariah,BRISyariah,biifriends,CIMBIndonesia,BankMuamalat,Panin_Bank,bank_jatim,infobankbjb,bankpundi,Citibank,sehatAQUA,virowater,SuperO2,AmidisWater,AirMineralClub,DaihatsuInd,DaihatsuInd,ertiga_ID,hondaisme,hondaisme,IsuzuID,ToyotaID,DaihatsuInd,Livinaclub,SuzukiIndonesia,SuzukiIndonesia,ToyotaID,AvanzaClub_ID,DaihatsuInd,KTBMitsubishi,SuzukiIndonesia,KTBMitsubishi,ToyotaID,ChevyIndonesia,SuzukiIndonesia,SuzukiIndonesia,ToyotaID,hondaisme,SuzukiIndonesia,ToyotaID,DaihatsuInd,ToyotaID,DaihatsuInd,KTBMitsubishi,hondaisme,ToyotaID,NissanID,MazdaMotorID,SuzukiIndonesia,DaihatsuInd,ChevyIndonesia,hyundaimobil,hyundaimobil,KTBMitsubishi,ToyotaID,SuzukiIndonesia,ToyotaID,KIAmotorsID,KIAmotorsID,NissanID,ToyotaID,SuzukiIndonesia,ToyotaID,IsuzuID,mbindonesia,audi_indonesia,NissanID,ToyotaID,hyundaimobil,KIAmotorsID,ToyotaID,ToyotaID,hondaisme,KTBMitsubishi,ToyotaID,hyundaimobil,hondaisme,NissanID,SuzukiIndonesia,SuzukiIndonesia,ford_id,hondaisme,DaihatsuInd,HondaJazzKom,hyundaimobil,SuzukiIndonesia,NissanID,KIAMotorsID,suzukisplash,SuzukiIndonesia,YarisID,ViosID,HondaBrioID,NissanID,HondaCivicID,DaihatsuInd,hondaisme,hondaisme,ToyotaID,MazdaMotorID,DaihatsuInd,SuzukiIndonesia,DaihatsuInd,ToyotaID,AvanzaClub_ID,IsuzuID,ToyotaID,SuzukiIndonesia,BMW_Indonesia,NissanID,MazdaMotorID,ChevyIndonesia,StarletID,hondaisme,LamboJakarta,ToyotaID,ToyotaID,KIAmotorsID,SuzukiIndonesia,hondaisme,KIAmotorsID,SuzukiIndonesia,ToyotaID,KTBMitsubishi,SuzukiIndonesia,KTBMitsubishi,SuzukiIndonesia,mbindonesia,SuzukiIndonesia,ford_id,MazdaMotorID,hyundaimobil,hyundaimobil,KIAmotorsID,SuzukiIndonesia,KTBMitsubishi,SuzukiIndonesia,DaihatsuInd,KTBMitsubishi,IsuzuID,SuzukiMotorID,welovehonda,YamahaIndonesia,KawasakiLovers,KTMIndonesia,Vespa_IND,Ducati_Ind,Minerva_id,SunsilkID,GarnierID,VaselineID,CLEARIndonesia,Veet_ID,id_oriflame,AXE_ID,LUX_ID,TheBodyShopIndo,ZincActivateYou,LorealParisID,OlayIndonesia,HeadShouldersID,PanteneID,LorealMenID,cleanandclearID,CantikCitra,vaselinemen,myponds,rexona_id,EmeronLovely,Mirabella_MT,mustikaratu,id_oriflame,PixyIndonesia,myponds,REVLONid,Sariayu_MT,VivaCosmetics,wardahbeauty,MaybellineINA,MarinaCosmetic,lipiceID,LorealParisID,Purbasari_ID,fanbofantastic,ULTIMA_id,Sophie_smarang,mustikaputeri,LancomeID,inezcosmetics,mustikaputeri,MarinaCosmetic,OlayIndonesia,caring_colours,NIVEA_ID,PAC_MT,SILKYGIRLovers,herborist_id,mustikaratuIND,myponds,Purbasari_ID,Sariayu_MT,PutihituShinzui,wardahbeauty,LUX_ID,BeritaSehatID,IDbiore,SahabatMarina,VivaCosmetics,OvaleBeauty,VivelleCare,OlayIndonesia,VaselineID,GarnierID,NIVEA_ID,LATULIPE_COSM,Dove_IDN,RudyHadisuwarno,SALSACOSMETICS,TheBodyShopIndo,baliratih,id_oriflame,PixyIndonesia,herborist_id,Biokos_MT,inezcosmetics,NatashaSkinCare,id_oriflame,BioreIndonesia,TjeFuk,MarinaCosmetic,mustikaratu,PixyIndonesia,myponds,Sariayu_MT,VivaCosmetics,wardahbeauty,REVLONid,Mirabella_MT,LorealParisID,MaybellineINA,inezcosmetics,id_oriflame,myRed_A,CussonsMumMe_ID,zwitsal_id,ULTIMA_id,caring_colours,GarnierID,OlayIndonesia,ULTIMA_id,CantikCitra,Purbasari_ID,deoonardcream,CantikCitra,gatsby_id,VivelleCare,Sariayu_MT,EskulinID,CussonsMumMe_ID,SHElalaland,MustikaPuteriID,rexona_id,IzziLoveID,VivaCosmetics,SahabatMarina,inezcosmetics,AXE_ID,beliagurlzone,zwitsal_id,id_oriflame,Dove_IDN,LorealParisID,TheBodyShopIndo,VaselineID,REVLONid,Purbasari_ID,EnchanteurIndon,VivelleCare,YSL_ID,NIVEA_ID,Sophie_Paris,AllianzId,Jiwasraya,AXA_Mandiri,BPJSTKinfo,bumiputera,myprudential,Sequislife,as_sinarmas,bumiputera,Panin_Bank,Jiwasraya,jasaraharja_pst,BANKBRI_ID,BRIngin_Life,INFOBPJS,ptaskes,acaasuransi,bankmandiri,asuransisunlife,kartudanamon,MNC_LIFE,AdiraIns,Zurich_ID,acaasuransi,CommBank_ID,Kratingdaeng,hemaviton_id,M150ID,Proman5Jam,mizoneid,pocariID,ExtraJossFans,kukubima_energi,CoolantID,SuperO2,YouCIsotonic,My_HydroCoco,diarykiranti,Fatigon_Spirit,Gatorade,LMen,ExtraJossFans,ngejrengs,kukubima_energi,kopimantapABC,CNI_Corporate,KapalApi_ID,kopijahe41,Kedai_Torabika,TOPKopi,AngetSariJahe,KafeKopiLuwak,IniBaruHidup,kopimantapABC,AikCheongIndo,KapalApi_ID,luwakwhitekoffi,TOPKopi,Kedai_Torabika,ayammerak_id,Sidojahe,GoodDayID,kopiko78,kopimantapABC,KapalApi_ID,TOPKopi,sahabatibu,MamyPokoID,happynappyid,KacangGaruda,DuaKelinci,GirlBestFriend,SoftexGirlsRoom,AnionAsli,infopembalut,kotexduniacewe,scoindonesia,shinewithcharm,tempodotco,kompascom,VIVAnews,detikcom,whatsonANTV,TRANS7,TRANSTV_CORP,SCTV_,OfficialRCTI,tvOneNews,Metro_TV,IndosiarTVtwit,netmediatama,KompasTV,Globaltvseru,Official_MNCTV,Trans7OnTheSpot,TRANS_IMB,HitamPutihT7,IndonesianIdol,liputan6dotcom,inserttranstv,MataNajwa,KickAndyShow,MarioTeguhFB,dahSyatMusik,InboxSCTV_,TheComment_NET,bukan4mata,Ini_Talkshow,TonightShow_NET,TMG_NET,FTV_SCTV,wideshotmetrotv,sketsatranstv,standupmetrotv,ceriwis_transtv,HomestayTrans7,Isengbanget_T7,BSWayang_NET,86_NetTV,myTrip_myAdvntr,987Genfm,101Jakfm,Prambors,Delta_FM,ozradiojakarta,TraxFMJKT,Iradiojakarta,mustang88fm,979FeMaleRadio,884GlobalFM,ardanradio,99ersRadio_Bdg,hardrockfm,Hitsradiobdg,UrbanRadio254,VRadioFM,SindoTrijayaFM,kisfmjakarta,967HitzFM,tab_gaul,TabKerenBeken,TabloidBintang,TabloidAURA,tabloidphone3,tabloidpulsa,CHIPIndonesia,TabloidNakita,Otomotifweekly,cek_ricek,tabloidrumah,tabloidsaji,swamagazine,mixmarcomm,marketingcoid,TechnoKonstruks,MSwadaya,idebisnismag,forumpengusaha,LuarBiasaMagz,tempodotco,GATRA_News,cerdaspolitik,INSPIRASIMAGZ,MajalahKartini,FeminaMagazine,CosmoIndonesia,GADISmagz,elleindonesia,majalahummi,MarieClaireID,bazaarindonesia,TabloidNurani,cleo_ind,GogirlMagazine,KPK_RI,SAR_NASIONAL,Kemenag_RI,KESDM,Portal_Kemlu_RI,Humas_Kumham,Kemenhut,KemenkeuRI,KelautanKKP,Kemdikbud_RI,kemkominfo,KemenPU,Kemdikbud_RI,Kemendag,kementan,Kemenperin_RI,humasnakertrans,depkop,HumasKLH,bappenas,KPDT_RI,KemenporaRI,ristekgaul,setkabgoid,Puspen_TNI,Kemenkopolhukam,ArsipNasionalRI,KPURI2014,bpkri,PPATK,BPS_Indonesia,infoBMKG,TMCPoldaMetro,PersibOfficial,PMSnews,_SriwijayaFC_,deltras_fc,FCSemenPadang,Aremafc_ISL,Persija_Jkt,FCPERSEBAYA,Persijap,bontangfc_1988,FCPERSEMA,PERSIPURA_,persiram_raja4,baritoputera,MitraKukar,PersisamID,PersepamMadura,GresikUnited_FC,PerselaFC,PersitaOfficial,persiba,PERSERU_SERUI,Persik_ID,pbandungrayafc,PersikaboLovers,Persiraja,PartaiHANURA,PDI_Perjuangan,DPP_PPP,PKSejahtera,PDemokrat,PemudaNasDem,Gerindra,Golkar5,BeritaPKB,DPPBulanBintang,infoPNA12,IndonesiaGaruda,merpatiairlines,ptpn11,pusripalembang,PerumPerhutani,PTBalaiPustaka,OfficialAntam,PTPERTAMINA,pln_123,ptinka,HumasLen,TelkomIndonesia,StudioPFN,IndosatMania,ptdahana,PTPINDAD,infogaram,PosIndonesia,PTPERTAMINA,radityadika,djenarmaesaayu,tehniadinata,ndorokakung,moammaremka,h_elshirazy,deelestari,Poconggg,TrinityTraveler,asmanadia,sittakarina,clara_ng,vabyo,alandakariza,FiraBasuki,adhityamulya,ninityunita,fuadi1,benzbara_,pidibaiq,marischkaprue,takdos,ikanatassa,rheinfathia,Andreahirata,ClaudiaKaunang,maswaditya,windyariestanty,MerryRiana,Iwan9S10A,theitasembiring,daraprayoga_,shitlicious,LunaMaya26,sherinasinna,bclsinclair,agnezmo,olla_ramlan,shireensungkar,raisa6690,jess_iskandar,Bellaudya829,gitagut,juliaperrez,mrsayudewi,SandraDewi88,memes605,chantalconcetta,dagnesia,thalitalatief,quinnfarah,tasyakamila,andienaisyah,pevpearce,WulanGuritno,mratuliu,deamirella,itsmeAsmirandah,Happy_Salma,aurakasih87,RealSyahnazS,_widikidiw_,nikitawilly_24,HarukaN_JKT48,sherylsheinafia,sarseh,Julstelle,sophieNavita,AdiniaWirasti,mynameisrossa,fitrop,Anggun_Cipta,xcintakiehlx,riantic,TitiRajoBintang,nirina_zubir,maudyayunda,chelseaislan,kimbrlyryder,sophialatjuba88,nabilahJKT48,therealDiSastr,naymirdad,dindakanyaa,atiqahhasiholan,marshanda,septriasa_acha,zaskiadyamecca,Vaelovexia,zaskiasungkarIR,NRamadhani,kinaryosih_03,nurimaulida,ayudiac,_kiranalara,dindahw,TyasMirasih8487,ralineshah,itsPrisia,OlgaLy_DIA,OliveJensen,yukikato,christiejulia,tinatoon93,Jscmila,popsovia,Ayuhastari,alicesofieNORIN,audimarissa_,nindysings,ardinarasti6,Titi_KamaLL,ti2dj,Nadya_HutaGalng,shandy_aulia,cumarachel,tikeprie,ersamayori,rezerdewi,showimah,donitabhubiy,Graciaz14,KarthykaPutri,mzalianty80,millanef,chelseaolivia92,nadinelist,MelaneyRicardo,intanuraini,cindybernadette,LauraBas,melly_goeslaw,indybarends,dewisandra,shanty78,Lady6igi,PrincesSyahrini,aurelhermansyah,PrillyBie,EnzyStoria,Zaskia_Gotix,gisel_la,arieltatum,MissSharena,kddevie,_PoppyBunga,dhiniaminarti29,cutmeyriska,evaceliaa,NinaZatulini,nafaurbach15,novaeliza,mieke_amalia,aawdee_uwais,ashantysiddik,astridbasjar,tiaaaaan,maudymikha,citraciki,basuki_btp,hattarajasa,mohmahfudmd,jokowi_do2,anasurbaningrum,Prabowo08,Yusrilihza_Mhd,iskan_dahlan,tifsembiring,Pak_JK,fadjroeL,IndraJPiliang,AlissaWahid,budimandjatmiko,benhan,ulil,kahfi_siregar,wimar,bangfauzibowo,pramonoanung,PoppyDharsono,lukmansaifuddin,marzukialie_MA,boediono,hnurwahid,ruhutsitompul,vjdaniel,vidialdiano,desta80s,corbuzer,ringgoagus,GlennFredly,gadiiing,armandmaulana,apriliokevin,afgansyah_reza,Riodewantoo,_VinoGBastian,RaffiAhmadLagi,OlgaSyahputra82,anjasmara,TukulWongNdeso,t_ORASUDI_ro,nicsap,Irwansyah_zs,evansanders_id,alysyarief,AlKohler7,Joe_Taslim,iko_uwais,randpunk90,boyhamzah,cjerikho829,realfedinuril,tulusm,Judikajude,SondoroMusic,riofebrian25,petra_sihombing,MarcelloTahitoe,mkhshn,MichaelMohede,bebiromeo2,AHMADDHANIPRAST,DennyCagur,AbangNarjiCagur,WCIndonesia,dhikacungkring,teukuwisnu2,dude2harlino,vickykciv,samuelrizal01,Herjunot7Ali,El8Rumi,dimasbeck_,MrRD_sit,RickyHarun45MF,adiipati,ashraf sinclair,okaantara,_baimwong,csugiono,saipul_jamil,irfanhakim,arsyilrahman,ruben_onsu,boywilliam,UyaKuya_SCTV,indraherlambang,OFCIvanGunawan,sammy0809SmrgkR,VictorySitohang,reu_reu,ramzi_tebe,PutraNababan,TerasTinaTalisa,desianwar,karniilyas,najwashihab,Tomtjok,budionodarsono,fifialeyda,Rosianna766Hi,meutya_hafid,_jeremyteti,marissaanita,s_nacita,smalakiano,flidwina,pritalaura,gadizafauzi,isyanabagoesoka,e_julianti,zeld_ung,kaniaswinata,avimalik,zackiarfan,rikeamru,nova_rini,juanita_aline,me_putri,bayusutiyono,dianabustami,fer_djo,NOAH_ID,slankdotcom,SMASHindonesia,Cherrybelleindo,Vierratale,kotakband_,geishaindonesia,SID_Official,dmasivband,BondanF2B,nidji,EndankSoekamti_,GBluesShelter,ADA_INDONESIA,princess_ind,myLASTCHILD,band_Armada,PASbandOfficial,Thebrandals,ALEXAtheBand,MaliqMusic,twitchangcuters,kerispatih_band,sheilaon7,gigi_band,kangenband_,Naifband,thesigit,repvblik_ind,ungu_tweet,kahitnafull,yovieandnuno,theovertunes,lylaindonesia,__rif,alexatheband,abackbone,cokelatband,cjrcomate31,ecoutez_ekute,fiveminutes_fm,bandwali,wsatcc,Bagindaria_ID_,dcinnamonsband,de19wa,jrocks1spirit,jamrudband,jikustik,officialjkt48,moccaofficial,naff_band,netral_official,projectpop,radja_band,ranforyourlife,seventeenband,saykoji,_setia_band_,she_band,ten2fiveband,tanggamusic,thevirginrcm,hijaudauntweet,lettoband,tdc_band,therainband,ZIGAZrocks,zivilia,SafirSenduk,RoyShakti,mrshananto,AidilAKBAR,FreddyPieloor,AirAsiald';
var fbs = 'AirAsiaIndonesia,garudaindonesia,167688383326905,tiketlionair,Y6BataviaAir,TigerairIndonesia,citilink,batikair,KalstarAviationPt,PelitaAir,57357699696,skyaviation,sriwijayaair.co.id,TriganaAirService,TraviraAir,tiketwingsair,IMB2014,indonesianidolofficial,liputan6online,127222570698367,52472954880,41083683391,Inbox.SuryaCitraTV,TheCommentNET2013,875923712434746,tetanggamasagitunet,FTV.SCTV,792327067454350,174105516106810,KartuAs,telkomsel,simPATI,xlrame,Indosat.IM3,Indosat.Mentari,smartfren,AXISgsm,xlrame,esiaspot,triindonesia,107071722668538,mandirifiesta,Bukopin.Siaga,BankBRIofficial,54086589301,XpresiBCA,bankjateng.community,182700508509333,BNI,Bukopin.Siaga,kartudanamon,CIMBIndonesia,bankocbcnisp,joyliving,119633074766327,syariahmandiri,megasyariah,107223592701139,222749127806282,BankBTPNSyariah,BNISyariah,BRISyariah,biifriends,KTAKartuKreditCIMBNiaga,BankMuamalatIndonesia,229769927036879,125258877580283,BankBJBOfficial,bankpundi,194933313878810,SehatAQUA,Virowater,supero2,amidisprincipal,minumvit,AdesIndonesia,ClubAirMineral,FREEDIndonesia,isuzu.indonesia,NissanLivinaClub,suzukiindonesia,suzukiindonesia,ToyotaID,ToyotaID,daihatsuindonesia,KTBMitsubishiMotorsIndonesia,suzukiindonesia,KTBMitsubishiMotorsIndonesia,ToyotaID,chevyindonesia,suzukiindonesia,suzukiindonesia,ToyotaID,149509846287,suzukiindonesia,ToyotaID,daihatsuindonesia,ToyotaID,daihatsuindonesia,KTBMitsubishiMotorsIndonesia,149509846287,ToyotaID,NissanZoneIndonesia,Mazdamotorindonesia,suzukiindonesia,daihatsuindonesia,chevyindonesia,hyundaimobil,hyundaimobil,KTBMitsubishiMotorsIndonesia,ToyotaID,suzukiindonesia,ToyotaID,Kiamotorsindonesia,Kiamotorsindonesia,NissanZoneIndonesia,ToyotaID,suzukiindonesia,ToyotaID,IsuzuID,MercedesBenzID,GrandLivinaIndonesia,ToyotaID,hyundaimobil,Kiamotorsindonesia,ToyotaID,ToyotaID,149509846287,KTBMitsubishiMotorsIndonesia,ToyotaID,hyundaimobil,149509846287,NissanZoneIndonesia,48329531516,suzukiindonesia,app_208195102528120,149509846287,suzukiindonesia,suzukiindonesia,vios.indonesia,BrioIndonesia,NissanZoneIndonesia,211436748836,daihatsuindonesia,149509846287,149509846287,ToyotaID,Mazdamotorindonesia,daihatsuindonesia,suzukiindonesia,daihatsuindonesia,ToyotaID,ToyotaID,IsuzuID,ToyotaID,suzukiindonesia,bmw.indonesia,GrandLivinaIndonesia,Mazdamotorindonesia,chevyindonesia,174435762567699,FREEDIndonesia,117544075003149,ToyotaID,ToyotaID,Kiamotorsindonesia,suzukiindonesia,149509846287,Kiamotorsindonesia,suzukiindonesia,ToyotaID,KTBMitsubishiMotorsIndonesia,suzukiindonesia,KTBMitsubishiMotorsIndonesia,suzukiindonesia,MercedesBenzID,suzukiindonesia,app_208195102528120,Mazdamotorindonesia,hyundaimobil,hyundaimobil,Kiamotorsindonesia,suzukiindonesia,KTBMitsubishiMotorsIndonesia,suzukiindonesia,daihatsuindonesia,KTBMitsubishiMotorsIndonesia,IsuzuID,suzukimotorindonesia,welovehonda,yamaholigan,KawasakiIndonesia,ktmina,VespaPID,PulsarIndonesia,DucatiIndonesia,minerva.indonesia,SunsilkIndonesia,GarnierIndonesia,VaselineID,ClearIndonesia,veet.id,id.oriflame,AXE.ID,LuxIndonesia,TheBodyShopIndonesia,LOrealParisID,OlayIndonesia,HeadandShouldersIndonesia,panteneindonesia,MenExpertIndonesia,cleanclearindonesia,79003217653,VaselineMEN,pondsindonesia,RexonaID,EmeronLovely,292128914221835,MirabellaCosmeticS,156153587777254,id.oriflame,PIXYIndonesiaOfficial,pondsindonesia,RevlonID,124990560860823,VivaCosmetics,wardahbeauty,MaybellineINA,133772801981,lipiceindonesia,LOrealParisID,Purbasari.Indonesia,FanboCosmetics,ultimaIIindonesia,sophiemartinesia,MustikaPuteri,143474012340307,217347921617477,MustikaPuteri,133772801981,MaryKayIDN,OlayIndonesia,caringcolours.ycpa,niveaid,134308649970017,pacmarthatilaar,SILKYGIRLIndonesia,131897073504018,HerboristNaturalCare,mustikaratuIND,pondsindonesia,Purbasari.Indonesia,sariayu.MT,PutihItuShinzui,Sumber-Ayu,wardahbeauty,LuxIndonesia,LifebuoyIndonesia,idbiore,sahabat.marina,VivaCosmetics,OvaleBeauty,183928901635651,OlayIndonesia,VaselineID,GarnierIndonesia,niveaid,292128914221835,doveindonesia,RudyHadisuwarnoCosmetics,SalsaCosmetics,TheBodyShopIndonesia,narcheese.baliratih,id.oriflame,PIXYIndonesiaOfficial,HerboristNaturalCare,biokosmt,inezcosmetics,NatashaSkinCare,id.oriflame,KaoBiore,tje.fuk.12,FanboCosmetics,292128914221835,231935806819862,133772801981,156153587777254,PIXYIndonesiaOfficial,pondsindonesia,124990560860823,VivaCosmetics,wardahbeauty,RevlonID,MirabellaCosmeticS,LOrealParisID,MaybellineINA,PigeonTeens,217347921617477,id.oriflame,RedACosmetics,clarestaindonesia,CussonsMumMe.Id,ZwitsalBabyCorner,ultimaIIindonesia,348176248590774,caringcolours.ycpa,231935806819862,GarnierIndonesia,OlayIndonesia,ultimaIIindonesia,79003217653,Purbasari.Indonesia,230255643653921,79003217653,GatsbyIndonesia,183928901635651,sariayu.MT,cheersmeup,CussonsMumMe.Id,SHElalaland,MustikaPuteriID,RexonaID,GetIZZIGetLove,VivaCosmetics,sahabat.marina,217347921617477,AXE.ID,beliagurlzone,ZwitsalBabyCorner,id.oriflame,doveindonesia,LOrealParisID,TheBodyShopIndonesia,VaselineID,RevlonID,Purbasari.Indonesia,348176248590774,183928901635651,niveaid,sophieparisindonesia,AIAAsuransiIndonesia,AllianzIndonesiaCommunity,asuransi.jiwasraya.1859,axamandiri,424843504198910,BPJSTKinfo,AJBBumiputera1912,prudential.indonesia,AsuransiSequislifeIndonesia,107223592701139,AJBBumiputera1912,229769927036879,asuransi.jiwasraya.1859,JasaRaharja,BankBRIofficial,360847693984321,BpjsInfo,timeline,424843504198910,mandirifiesta,1423982334512197,128141253911399,asuransitakaful,238698282846342,kartudanamon,MNCLIFEINSURANCE,157831064342505,57859554896,ZurichIndonesia,timeline,CommbankID,MyKratingdaeng,hemaviton,M150Indonesia,Proman5Jam,mizone,pocariID,info.extrajoss,kukubimaenergi,CoolantID,supero2,EnaOGeneration,youcisotonic,HydroCoco,diarykiranti,fatigonspirit,Gatorade,LMen.fanpage,info.extrajoss,kukubimaenergi,kopimantapabc,284302391685694,KopiKapalApi,kopijahe41,571984899529729,215957281781084,TOPCoffeeIndonesia,571984899529729,angetsari.id,kopiradixhpa,kopiluwak.civetcoffee,NescafeID,kopilanangmalangsari,kopimantapabc,89487173018,52030028053,KopiKapalApi,152170381472524,KopiLuwakWhiteKoffee,TOPCoffeeIndonesia,215957281781084,507962272578846,155192021295653,kopiGoodDay.indonesia,kopimantapabc,KopiKapalApi,TOPCoffeeIndonesia,sahabatibu,MamyPokoIndonesia,BundaCermat,PampersIndonesia,HappyNappyIndonesia,kacanggaruda,DuaKelinciID,girlbestfriend,lovemoonanionpembalutsehat,nateshpembalut,kotexduniacewe,450987771610865,ShinewithCharm,354981542517,252369521494578,OfficialTRANS7,148636738536241,147622975307583,OfficialRCTI.TV,metrotv,IndosiarID.TV,netmediatamaindonesia,KompasTV,GlobaltvIndonesia,MnctvOfficial,IMB2014,indonesianidolofficial,liputan6online,127222570698367,52472954880,41083683391,Inbox.SuryaCitraTV,TheCommentNET2013,875923712434746,tetanggamasagitunet,FTV.SCTV,792327067454350,174105516106810,987genfmjkt,101Jakfm,prambors,DeltaFMRadio,ozradio.jakarta.9,1014TRAXFM,IRADIOJAKARTA,mustang88fm,femaleradio,78363072223,ardanradiobandung,113008405438894,876hardrockfm,HitsRadioBandung,137924826278505,vradio.jakarta,sindotrijayafm,kisfmjakarta,967hitzfm,159251644114961,102248076477671,107890462563680,tabloidbintang,170416916313377,287926684597821,pulcom,101399716568600,151954181525822,114634101892589,111047108906175,cekricek,TabloidRUMAH,tabloidsaji,swamagazine,216464115059193,mixmarcomm,Marketingcoid,technokonstruksi,majalah.swadaya,idebisnismag,112510268795023,103774869657240,TempoMedia,GATRAMAGZ,beritaindonesia,Inspirasi.Indonesia,KartiniMagazine,FeminaMagazineIndonesia,153605411957,148144452487,ELLEINDONESIAmagazine,MajalahUmmi,206928762665582,159486907425282,118472648351102,CLEO.Ind,gogirlmagz,107501425128,286506207927,kesdm,Kemlu.RI,KEMENKUMHAM.RI,138151149577999,217934864971247,196629527026251,Kemdikbud.RI,Kemkominfo,publikasi.kementerianpu,Kemdikbud.RI,608925165792115,233402133510931,kppdanpa,ristekgaul,Kejaksaan.Republik.Indonesia,350005585069284,polri,169257903141478,147810415382310,137473109756643,auditboard.RI,21164211233,163185546552,sriwijayafc,deltamaniasidoarjo,semenpadangfc,aremaindonesiafc,195433703597,185380884826216,FansPersijap,bontang.FC,persema,persipura,257095531010842,PsBaritoPuteraKalsel,mitrakukar,PersisamID,Persepam.mu,ultrasmaniagresik,PerselaFC,26633412083,persiba,Perseru,Persik,PelitaBandungRayaFc,PBLOfficial,54724763780,hanura.official,DPP.PDI.Perjuangan,pppdpp,HumasPartaiKeadilanSejahtera,pdemokrat,135724689838285,gerindra,PagePartaiGolkar,pkb2pkb,amanatnasional,114716555303039,infopna12,PT.GarudaIndonesia,59975819750,116142031781012,111067895643837,328929549705,ptpn09,1430808697164788,ptpnVI,102869616505644,145483318812097,ptpn11,249687625117927,213266588707257,157362670977664,224379790937318,77208773950,Multimedia.PT.Balai.Pustaka.Persero,258118647629283,ptpertaminapersero,130479023722680,cc123pln,BukitAsamOfficial,113480665416468,129652197116026,ptbarata,108337514684,TelekomunikasiIndonesia,Indosat.IM3,dahana.persero,179347639820,166100293465058,semengresik,semenkupang,100919599991648,posindonesia,ptpertaminapersero,radityadikapages,ndorokakung,283768426740,6846134641,160943630633564,TrinityTraveler,AsmaNadia.Penulis,sittakarina,vabyo,alandakarizapage,fuadiN5M,batubara.bernard,marischka.prudencefull,ika.natassa,RheinFathiaWriter,ClaudiaKaunangFanpage,windy.ariestanty,inspirationbymerryriana,102167306543767,shitliciousdotcom,officiallunamaya,SherinaOfficial,bclofficialpage,agnesmonica,Raisa6690,jessicaiskandarofficial,GitaGutawa,chantaldellaconcetta,ItsFarahQuinn,TasyaKamilaOfficial,44971471700,49414159393,sherylsheinafia05,RossaOfficial,207202594045,anggun.official,CintaLaura.OfficialPage,AyundaFazaMaudy,1468991113364871,marshandafilm,ZaskiaMeccaOfficial,1499240397010919,olga.lydia.35,jessica.m.agnesia.5,260259620764429,TitiDJOfficial,NadyaHutagalungPage,209290562455174,rachelmaryams,103961707268,millanefernandez,49586517592,327452267415356,928683410494867,155572797835677,127551525482,MMMT.maudymikha,1383941375220354,AhokBTP,M.Hatta.Rajasa,mmd.mahfudmd,JKWofficial,138554352826249,PrabowoSubianto,302310959806242,tifatul.sembiring,46629561325,bangfauzibowo,744536835564211,65059916338,81041498233,MHidayatNurWahid,ruhutsitompul2,megawati.soekarnoputri,VJDanielOfficial,VidiAldiano,DeddyMahendraDestaDestaOvj,mastercorbuzier,186844197219,435929406457654,226265450761910,240200780207,35021957015,AfganOfficial1,337798076258677,B212VGB,148155805263902,150196321670537,anjasmara.prasetya,fanspage.tukularwana,Torasudi,160981653945750,IRWANSYAH.OneSyahDevotee,114980865191958,157874861064230,AL7Official,joetaslim.page,155706447787255,188354774576662,106124162806152,71490253478,123153981103737,musiktulus,Judika,sandhysondoroband,riofebrian25,97513897539,37598944098,marcellsiahaan,129094723794524,619820951365349,225074140365,607513425988603,333996936702491,SiWendyCagur,108378012538726,117705024930225,243956682294867,113884555338433,SamuelRizalA,109571059084448,453902777973732,126090210740441,118607501492631,863438627009464,334043883411397,officialashrafsinclair,147222758664175,199442116787994,221779291190072,saipuljamilindonesia,IrfanHakimPage,104184559671,87530503143,219218448112469,115799048456417,indraherlambang13,653342668115656,131626690247812,ChokySitohangFull.New,reuben.elishama.9,ramzi.tebe.7,450291004997946,184336824414,214602385643,256239354400055,59617814993,tomtjok.tjokro,bdi.budionodarsono,118318544852203,fpandyfnoya,RosiannaSilalahi,85241740520,168461089859683,198400063514216,51011802974,43552087552,gadiza.fauzi.14,endiruruh,69943418552,BakerVirgie,100001454637620,kania.sutisnawinata.1,114994641854467,509900159064484,anastasya.putri.50,139571722779886,chantaldellaconcetta,239565192797836,NOAH.ID.MUSIC,slankband,CherryBelle.Official.FanPage,Vierratale.official,KotakAsli,GeishaIndonesia,SupermanIsDeadSidOfficial,194148335787,bondanf2b,NIDJIholic,endanksoekamti,231675880190849,173265536020370,PrincessIndonesia,lastchild,armada.musik,pasband.info,112570826262,Alexatheband,Maliqndessentials,thechangcutersrock,kerispatih.band,108424945858274,118388814844519,official.kangenband,Naif8and,thesigitofficial,202317706632226,UNGUBand,KAHITNA,39816754628,TheOvertunes,LYLAFANSCLUB,126719926577,7ICONS,Alexatheband,backbone.official,CokelatBand,789905201029819,45224000026,FiveMinutesIndonesia,118270987889,56185409640,259860837382982,59197338558,Dewa19,jrocks.official,657051284333946,official.JKT48,moccaband,NaFFOnline,220045414763494,project.pop,ranforyourlife,SeventeenBand,saykoji,SetiaBand,shestheband,ten2fiveband,TANGGAMUSIC,hijaudaun,116726395015445,103105913062773,TheRain,231542615914,110476975653027,safirsenduk,179559162075625,334787519678,aidilakbarmadjid,FREDDYPIELOOR';
var parseUrl = function(url){
  var Url = require('url');
  var raw = Url.parse(url);
  return raw.pathname.split('/').reverse()[0];
};

module.exports = {
	user : function(req,res){
    //var ids = req.param('ids'),
    var arrIds = ids.split(','),
      reduced = [],
      promises = [];

    _.each(arrIds, function(n,i){
      var group = Math.ceil(i/99);
      if(typeof(reduced[group])==='undefined'){ reduced[group] = [] }
      reduced[group].push(n);
    });

    _.each(reduced, function(n,i){
      promises.push( twitter.getUser(n) );
    });

    Promise.all(promises)
      .then(function(results){
        var flatten = _.flatten(results);
        var require = _.map(flatten, function(n){
          return {
            object_name: n.name,
            content: n.id_str,
            extra_content: n.screen_name
          }
        });
        res.ok(require);
      });
  },
  twitter: function(req, res){
    var sql = [];
    var jsons = [
      {
        "object_name": "Garuda Indonesia",
        "content": "155418706",
        "extra_content": "IndonesiaGaruda"
      },
      {
        "object_name": "Merpati Airlines",
        "content": "447079867",
        "extra_content": "MerpatiAirways"
      },
      {
        "object_name": "Lion Air Indonesia",
        "content": "572293326",
        "extra_content": "LionAirIndo"
      },
      {
        "object_name": "Batavia Air",
        "content": "59075383",
        "extra_content": "bataviaair"
      },
      {
        "object_name": "Голиборода Пётр",
        "content": "2833596221",
        "extra_content": "tigerairmandala"
      },
      {
        "object_name": "Citilink",
        "content": "78264667",
        "extra_content": "Citilink"
      },
      {
        "object_name": "Batik Air ",
        "content": "1959666308",
        "extra_content": "BatikAir"
      },
      {
        "object_name": "Kalstar Aviation ",
        "content": "412128027",
        "extra_content": "Kalstar_Online"
      },
      {
        "object_name": "Pelita Air Service",
        "content": "191810928",
        "extra_content": "PelitaAirlines"
      },
      {
        "object_name": "Sky Aviation",
        "content": "302046879",
        "extra_content": "Sky_Aviation"
      },
      {
        "object_name": "Sriwijaya Air",
        "content": "134057667",
        "extra_content": "SriwijayaAir"
      },
      {
        "object_name": "Trigana Air Service",
        "content": "519241354",
        "extra_content": "trigana_air"
      },
      {
        "object_name": "Lion Air - Wings Air",
        "content": "193860141",
        "extra_content": "LionAirNews"
      },
      {
        "object_name": "On The Spot TRANS7",
        "content": "109310923",
        "extra_content": "Trans7OnTheSpot"
      },
      {
        "object_name": "IMB",
        "content": "148722108",
        "extra_content": "TRANS_IMB"
      },
      {
        "object_name": "Hitam Putih Trans|7",
        "content": "219961005",
        "extra_content": "HitamPutihT7"
      },
      {
        "object_name": "IndonesianIdolJunior",
        "content": "413022615",
        "extra_content": "IndonesianIdol"
      },
      {
        "object_name": "Liputan6.com",
        "content": "47596019",
        "extra_content": "liputan6dotcom"
      },
      {
        "object_name": "informasi selebriti",
        "content": "48890883",
        "extra_content": "inserttranstv"
      },
      {
        "object_name": "Mata Najwa",
        "content": "72274016",
        "extra_content": "MataNajwa"
      },
      {
        "object_name": "Kick Andy Show",
        "content": "72539067",
        "extra_content": "KickAndyShow"
      },
      {
        "object_name": "Mario Teguh Facebook",
        "content": "470745364",
        "extra_content": "MarioTeguhFB"
      },
      {
        "object_name": "dahSyat",
        "content": "74904593",
        "extra_content": "dahSyatMusik"
      },
      {
        "object_name": "Inbox SCTV",
        "content": "172729719",
        "extra_content": "InboxSCTV_"
      },
      {
        "object_name": "The Comment",
        "content": "1407232710",
        "extra_content": "TheComment_NET"
      },
      {
        "object_name": "bukanempatmata",
        "content": "278019870",
        "extra_content": "bukan4mata"
      },
      {
        "object_name": "Ini Talkshow NET.",
        "content": "2406546896",
        "extra_content": "Ini_Talkshow"
      },
      {
        "object_name": "Tonight Sho",
        "content": "2938865624",
        "extra_content": "tonightshow_net"
      },
      {
        "object_name": "Tetangga Masa Gitu?",
        "content": "2384879876",
        "extra_content": "TMG_NET"
      },
      {
        "object_name": "FTV SCTV",
        "content": "159412545",
        "extra_content": "FTV_SCTV"
      },
      {
        "object_name": "WIDE SHOT METRO TV",
        "content": "410168661",
        "extra_content": "wideshotmetrotv"
      },
      {
        "object_name": "dirautis",
        "content": "2527902469",
        "extra_content": "sketsatranstv"
      },
      {
        "object_name": "Stand Up Comedy",
        "content": "368275480",
        "extra_content": "standupmetrotv"
      },
      {
        "object_name": "Ceriwis TransTV",
        "content": "117021323",
        "extra_content": "ceriwis_transtv"
      },
      {
        "object_name": "Homestay Trans 7",
        "content": "210060993",
        "extra_content": "HomestayTrans7"
      },
      {
        "object_name": "ISENG BANGET Trans|7",
        "content": "537920204",
        "extra_content": "Isengbanget_T7"
      },
      {
        "object_name": "Bukan Sekedar Wayang",
        "content": "2594535174",
        "extra_content": "BSWayang_NET"
      },
      {
        "object_name": "86 NET.",
        "content": "2398092986",
        "extra_content": "86_NetTV"
      },
      {
        "object_name": "My Trip My Adventure",
        "content": "1492114878",
        "extra_content": "myTrip_myAdvntr"
      },
      {
        "object_name": "Kartu_As",
        "content": "253858309",
        "extra_content": "Kartu_As"
      },
      {
        "object_name": "Telkomsel",
        "content": "255409050",
        "extra_content": "Telkomsel"
      },
      {
        "object_name": "simPATI",
        "content": "260043508",
        "extra_content": "simPATI"
      },
      {
        "object_name": "XLCare",
        "content": "480224156",
        "extra_content": "XLCare"
      },
      {
        "object_name": "Indosat CustomerCare",
        "content": "548904824",
        "extra_content": "IndosatCare"
      },
      {
        "object_name": "Indosat",
        "content": "61379637",
        "extra_content": "IndosatMania"
      },
      {
        "object_name": "Smartfren",
        "content": "64924675",
        "extra_content": "smartfrenworld"
      },
      {
        "object_name": "AXIS",
        "content": "79994423",
        "extra_content": "AXISgsm"
      },
      {
        "object_name": "XL Axiata",
        "content": "82552414",
        "extra_content": "XL123"
      },
      {
        "object_name": "Esia-BTEL",
        "content": "83354928",
        "extra_content": "untungpakeesia"
      },
      {
        "object_name": "3 Indonesia",
        "content": "63433517",
        "extra_content": "triindonesia"
      },
      {
        "object_name": "Flexi Irit",
        "content": "122005426",
        "extra_content": "FlexiIrit"
      },
      {
        "object_name": "bank mandiri",
        "content": "2278761810",
        "extra_content": "bankmandiri"
      },
      {
        "object_name": "Bank Bukopin",
        "content": "268599801",
        "extra_content": "bukopinsiaga"
      },
      {
        "object_name": "BANK BRI",
        "content": "1355939492",
        "extra_content": "BANKBRI_ID"
      },
      {
        "object_name": "Bank Tabungan Negara",
        "content": "1669424959",
        "extra_content": "BANKBTN_ID"
      },
      {
        "object_name": "Xpresi BCA",
        "content": "351429302",
        "extra_content": "XpresiBCA"
      },
      {
        "object_name": "BANK JATENG",
        "content": "332562852",
        "extra_content": "bank_jateng"
      },
      {
        "object_name": "Bank Kaltim Syariah",
        "content": "988859341",
        "extra_content": "kas_pm"
      },
      {
        "object_name": "BNI",
        "content": "62455266",
        "extra_content": "BNI46"
      },
      {
        "object_name": "Kartu Danamon",
        "content": "266012560",
        "extra_content": "kartudanamon"
      },
      {
        "object_name": "CIMB Niaga",
        "content": "949032626",
        "extra_content": "CIMBIndonesia"
      },
      {
        "object_name": "Bank OCBC NISP",
        "content": "417448115",
        "extra_content": "bankocbcnisp"
      },
      {
        "object_name": "joylivingPB",
        "content": "2975563652",
        "extra_content": "joylivingPB"
      },
      {
        "object_name": "Bank Syariah Mandiri",
        "content": "221665845",
        "extra_content": "syariahmandiri"
      },
      {
        "object_name": "Bank Mega Syariah",
        "content": "165675740",
        "extra_content": "TweetBMS"
      },
      {
        "object_name": "Bank Sinarmas Tbk",
        "content": "1850568085",
        "extra_content": "BankSinarmas"
      },
      {
        "object_name": "Bank Syariah Bukopin",
        "content": "340041327",
        "extra_content": "BSyariahBukopin"
      },
      {
        "object_name": "BNI Syariah",
        "content": "141500996",
        "extra_content": "BNISyariah"
      },
      {
        "object_name": "BRISyariah",
        "content": "185104782",
        "extra_content": "BRISyariah"
      },
      {
        "object_name": "BII Maybank",
        "content": "212543328",
        "extra_content": "biifriends"
      },
      {
        "object_name": "Bank Muamalat",
        "content": "141964399",
        "extra_content": "BankMuamalat"
      },
      {
        "object_name": "Panin Bank",
        "content": "291665919",
        "extra_content": "Panin_Bank"
      },
      {
        "object_name": "bank jatim",
        "content": "388046484",
        "extra_content": "bank_jatim"
      },
      {
        "object_name": "Bank BJB",
        "content": "2359042038",
        "extra_content": "infobankbjb"
      },
      {
        "object_name": "Bank Pundi Indonesia",
        "content": "194121339",
        "extra_content": "bankpundi"
      },
      {
        "object_name": "Citibank",
        "content": "80374332",
        "extra_content": "Citibank"
      },
      {
        "object_name": "AQUA",
        "content": "121657158",
        "extra_content": "sehatAQUA"
      },
      {
        "object_name": "Viro Water",
        "content": "242615487",
        "extra_content": "virowater"
      },
      {
        "object_name": "SUPERO2",
        "content": "390646699",
        "extra_content": "SuperO2"
      },
      {
        "object_name": "Distributor Amidis",
        "content": "95126443",
        "extra_content": "AmidisWater"
      },
      {
        "object_name": "Club Air Mineral",
        "content": "1720867100",
        "extra_content": "AirMineralClub"
      },
      {
        "object_name": "Daihatsu Indonesia",
        "content": "86864472",
        "extra_content": "DaihatsuInd"
      },
      {
        "object_name": "Ertiga Indonesia",
        "content": "492821998",
        "extra_content": "ertiga_ID"
      },
      {
        "object_name": "Honda Indonesia",
        "content": "120943056",
        "extra_content": "hondaisme"
      },
      {
        "object_name": "Isuzu Indonesia",
        "content": "43124570",
        "extra_content": "IsuzuID"
      },
      {
        "object_name": "Toyota Indonesia",
        "content": "64310527",
        "extra_content": "ToyotaID"
      },
      {
        "object_name": "Nissan Livina Club",
        "content": "68553471",
        "extra_content": "Livinaclub"
      },
      {
        "object_name": "Suzuki Indonesia",
        "content": "214823582",
        "extra_content": "SuzukiIndonesia"
      },
      {
        "object_name": "T.A.C.I",
        "content": "1432575872",
        "extra_content": "AvanzaClub_ID"
      },
      {
        "object_name": "KTB Mitsubishi",
        "content": "531980795",
        "extra_content": "KTBMitsubishi"
      },
      {
        "object_name": "KTB Mitsubishi",
        "content": "531980795",
        "extra_content": "KTBMitsubishi"
      },
      {
        "object_name": "Toyota Indonesia",
        "content": "64310527",
        "extra_content": "ToyotaID"
      },
      {
        "object_name": "Chevrolet Indonesia",
        "content": "109514212",
        "extra_content": "ChevyIndonesia"
      },
      {
        "object_name": "Suzuki Indonesia",
        "content": "214823582",
        "extra_content": "SuzukiIndonesia"
      },
      {
        "object_name": "Honda Indonesia",
        "content": "120943056",
        "extra_content": "hondaisme"
      },
      {
        "object_name": "Daihatsu Indonesia",
        "content": "86864472",
        "extra_content": "DaihatsuInd"
      },
      {
        "object_name": "NISSAN Indonesia ",
        "content": "69166306",
        "extra_content": "NissanID"
      },
      {
        "object_name": "Mazda Indonesia",
        "content": "543419949",
        "extra_content": "MazdaMotorID"
      },
      {
        "object_name": "Hyundai Indonesia",
        "content": "160138881",
        "extra_content": "hyundaimobil"
      },
      {
        "object_name": "KIA Motors Indonesia",
        "content": "453846147",
        "extra_content": "KIAmotorsID"
      },
      {
        "object_name": "Isuzu Indonesia",
        "content": "43124570",
        "extra_content": "IsuzuID"
      },
      {
        "object_name": "Mercedes-Benz ID",
        "content": "158221213",
        "extra_content": "MBindonesia"
      },
      {
        "object_name": "Audi Indonesia",
        "content": "1088057180",
        "extra_content": "audi_indonesia"
      },
      {
        "object_name": "Ford Mobil Indonesia",
        "content": "519160735",
        "extra_content": "ford_id"
      },
      {
        "object_name": "Komunitas Honda Jazz",
        "content": "635141237",
        "extra_content": "HondaJazzKom"
      },
      {
        "object_name": "Suzuki Splash Club",
        "content": "459969125",
        "extra_content": "suzukisplash"
      },
      {
        "object_name": "Toyota Yaris",
        "content": "120711845",
        "extra_content": "YarisID"
      },
      {
        "object_name": "Toyota Vios",
        "content": "114703394",
        "extra_content": "ViosID"
      },
      {
        "object_name": "Honda Brio Indonesia",
        "content": "735582775",
        "extra_content": "HondaBrioID"
      },
      {
        "object_name": "HondaCivicIndonesia",
        "content": "1710223328",
        "extra_content": "HondaCivicID"
      },
      {
        "object_name": "T.A.C.I",
        "content": "1432575872",
        "extra_content": "AvanzaClub_ID"
      },
      {
        "object_name": "BMW Indonesia",
        "content": "54559148",
        "extra_content": "BMW_Indonesia"
      },
      {
        "object_name": "Starlet Indonesia",
        "content": "223335497",
        "extra_content": "StarletID"
      },
      {
        "object_name": "Lamborghini Jakarta",
        "content": "600951957",
        "extra_content": "LamboJakarta"
      },
      {
        "object_name": "Mazda Indonesia",
        "content": "543419949",
        "extra_content": "MazdaMotorID"
      },
      {
        "object_name": "Hyundai Indonesia",
        "content": "160138881",
        "extra_content": "hyundaimobil"
      },
      {
        "object_name": "KIA Motors Indonesia",
        "content": "453846147",
        "extra_content": "KIAmotorsID"
      },
      {
        "object_name": "Suzuki Indonesia",
        "content": "214823582",
        "extra_content": "SuzukiIndonesia"
      },
      {
        "object_name": "KTB Mitsubishi",
        "content": "531980795",
        "extra_content": "KTBMitsubishi"
      },
      {
        "object_name": "Daihatsu Indonesia",
        "content": "86864472",
        "extra_content": "DaihatsuInd"
      },
      {
        "object_name": "Isuzu Indonesia",
        "content": "43124570",
        "extra_content": "IsuzuID"
      },
      {
        "object_name": "Suzuki Motor ID",
        "content": "265196309",
        "extra_content": "SuzukiMotorID"
      },
      {
        "object_name": "welovehonda ",
        "content": "52778170",
        "extra_content": "welovehonda"
      },
      {
        "object_name": "Yamaha Indonesia",
        "content": "57904133",
        "extra_content": "YamahaIndonesia"
      },
      {
        "object_name": "Kawasaki Indonesia",
        "content": "529086456",
        "extra_content": "KawasakiLovers"
      },
      {
        "object_name": "KTM Indonesia",
        "content": "579068400",
        "extra_content": "KTMIndonesia"
      },
      {
        "object_name": "Vespa Indonesia",
        "content": "312416470",
        "extra_content": "Vespa_IND"
      },
      {
        "object_name": "Ducati Indonesia",
        "content": "1443176815",
        "extra_content": "Ducati_Ind"
      },
      {
        "object_name": "Minerva Motor",
        "content": "573759054",
        "extra_content": "Minerva_id"
      },
      {
        "object_name": "Sunsilk Indonesia",
        "content": "108196956",
        "extra_content": "SunsilkID"
      },
      {
        "object_name": "Garnier Indonesia",
        "content": "207009014",
        "extra_content": "GarnierID"
      },
      {
        "object_name": "Vaseline Indonesia",
        "content": "243579052",
        "extra_content": "VaselineID"
      },
      {
        "object_name": "CLEAR Indonesia",
        "content": "307794480",
        "extra_content": "CLEARIndonesia"
      },
      {
        "object_name": "Veet Indonesia",
        "content": "308850276",
        "extra_content": "Veet_ID"
      },
      {
        "object_name": "Oriflame Indonesia",
        "content": "394544327",
        "extra_content": "id_oriflame"
      },
      {
        "object_name": "AXE INDONESIA",
        "content": "73321156",
        "extra_content": "AXE_ID"
      },
      {
        "object_name": "LUX Indonesia",
        "content": "82063962",
        "extra_content": "LUX_ID"
      },
      {
        "object_name": "The Body Shop Indo",
        "content": "46622069",
        "extra_content": "TheBodyShopIndo"
      },
      {
        "object_name": "ZincActivateYou",
        "content": "160803623",
        "extra_content": "ZincActivateYou"
      },
      {
        "object_name": "L'Oreal Paris ",
        "content": "188265681",
        "extra_content": "LorealParisID"
      },
      {
        "object_name": "Olay Indonesia",
        "content": "211795226",
        "extra_content": "OlayIndonesia"
      },
      {
        "object_name": "Head & Shoulders",
        "content": "326695656",
        "extra_content": "HeadShouldersID"
      },
      {
        "object_name": "Pantene Indonesia",
        "content": "87642417",
        "extra_content": "PanteneID"
      },
      {
        "object_name": "Men Expert Indonesia",
        "content": "145169205",
        "extra_content": "LorealMenID"
      },
      {
        "object_name": "Clean&Clear INA",
        "content": "156510301",
        "extra_content": "cleanandclearID"
      },
      {
        "object_name": "Rumah Cantik Citra",
        "content": "409884096",
        "extra_content": "CantikCitra"
      },
      {
        "object_name": "Vaseline Men",
        "content": "106970078",
        "extra_content": "vaselinemen"
      },
      {
        "object_name": "POND'S Indonesia",
        "content": "278039284",
        "extra_content": "myponds"
      },
      {
        "object_name": "Rexona",
        "content": "283800203",
        "extra_content": "rexona_id"
      },
      {
        "object_name": "Emeron Lovely",
        "content": "412181032",
        "extra_content": "EmeronLovely"
      },
      {
        "object_name": "Mirabella Cosmetics",
        "content": "587062448",
        "extra_content": "Mirabella_MT"
      },
      {
        "object_name": "mustika ratu",
        "content": "63017596",
        "extra_content": "mustikaratu"
      },
      {
        "object_name": "PIXY Indonesia",
        "content": "338313637",
        "extra_content": "PIXYIndonesia"
      },
      {
        "object_name": "Revlon Indonesia",
        "content": "99045087",
        "extra_content": "REVLONid"
      },
      {
        "object_name": "Sariayu MarthaTilaar",
        "content": "555241378",
        "extra_content": "Sariayu_MT"
      },
      {
        "object_name": "Viva Cosmetics",
        "content": "626270031",
        "extra_content": "VivaCosmetics"
      },
      {
        "object_name": "Wardah Cosmetics",
        "content": "198385937",
        "extra_content": "wardahbeauty"
      },
      {
        "object_name": "Maybelline Indonesia",
        "content": "155828096",
        "extra_content": "MaybellineINA"
      },
      {
        "object_name": "Marina Cosmetics",
        "content": "2596219434",
        "extra_content": "MarinaCosmetic"
      },
      {
        "object_name": "Lip Ice",
        "content": "263039466",
        "extra_content": "lipiceID"
      },
      {
        "object_name": "Purbasari ",
        "content": "1202921221",
        "extra_content": "Purbasari_ID"
      },
      {
        "object_name": "Fanbo Cosmetics",
        "content": "583994978",
        "extra_content": "fanbofantastic"
      },
      {
        "object_name": "ULTIMA II Indonesia",
        "content": "335697578",
        "extra_content": "ULTIMA_id"
      },
      {
        "object_name": "Mustika Puteri",
        "content": "119680861",
        "extra_content": "mustikaputeri"
      },
      {
        "object_name": " Lancôme Indonesia",
        "content": "192439867",
        "extra_content": "LancomeID"
      },
      {
        "object_name": "inez cosmetics",
        "content": "257263497",
        "extra_content": "inezcosmetics"
      },
      {
        "object_name": "Caring Colours",
        "content": "156467389",
        "extra_content": "caring_colours"
      },
      {
        "object_name": "NIVEA_ID",
        "content": "580858248",
        "extra_content": "NIVEA_ID"
      },
      {
        "object_name": "PAC MARTHA TILAAR",
        "content": "172664300",
        "extra_content": "PAC_MT"
      },
      {
        "object_name": "SILKYGIRL",
        "content": "241817651",
        "extra_content": "SILKYGIRLovers"
      },
      {
        "object_name": "Herborist_ID",
        "content": "1173982826",
        "extra_content": "Herborist_ID"
      },
      {
        "object_name": "MustikaRatuIND",
        "content": "2362138314",
        "extra_content": "mustikaratuIND"
      },
      {
        "object_name": "Putih itu Shinzu'i",
        "content": "399217549",
        "extra_content": "PutihituShinzui"
      },
      {
        "object_name": "Berita Sehat",
        "content": "373404205",
        "extra_content": "BeritaSehatID"
      },
      {
        "object_name": "Women's World",
        "content": "160485151",
        "extra_content": "IDbiore"
      },
      {
        "object_name": "Marina",
        "content": "280340301",
        "extra_content": "SahabatMarina"
      },
      {
        "object_name": "Ovale Beauty",
        "content": "1258901196",
        "extra_content": "OvaleBeauty"
      },
      {
        "object_name": "Vivelle Care",
        "content": "236648699",
        "extra_content": "VivelleCare"
      },
      {
        "object_name": "LaTulipe Cosmetiques",
        "content": "2187507666",
        "extra_content": "LATULIPE_COSM"
      },
      {
        "object_name": "DOVE Indonesia",
        "content": "79124517",
        "extra_content": "Dove_IDN"
      },
      {
        "object_name": "Rudy Hadisuwarno",
        "content": "180633859",
        "extra_content": "RudyHadisuwarno"
      },
      {
        "object_name": "SALSA Cosmetics",
        "content": "170164248",
        "extra_content": "SALSACOSMETICS"
      },
      {
        "object_name": "Bali Ratih",
        "content": "166226022",
        "extra_content": "baliratih"
      },
      {
        "object_name": "Biokos Martha Tilaar",
        "content": "385753826",
        "extra_content": "Biokos_MT"
      },
      {
        "object_name": "Natasha Skin ",
        "content": "248983207",
        "extra_content": "NatashaSkinCare"
      },
      {
        "object_name": "Bioré Indonesia",
        "content": "1560107701",
        "extra_content": "BioreIndonesia"
      },
      {
        "object_name": "TjeFuk",
        "content": "107479379",
        "extra_content": "TjeFuk"
      },
      {
        "object_name": "Marina Cosmetics",
        "content": "2596219434",
        "extra_content": "MarinaCosmetic"
      },
      {
        "object_name": "mustika ratu",
        "content": "63017596",
        "extra_content": "mustikaratu"
      },
      {
        "object_name": "PIXY Indonesia",
        "content": "338313637",
        "extra_content": "PIXYIndonesia"
      },
      {
        "object_name": "POND'S Indonesia",
        "content": "278039284",
        "extra_content": "myponds"
      },
      {
        "object_name": "Sariayu MarthaTilaar",
        "content": "555241378",
        "extra_content": "Sariayu_MT"
      },
      {
        "object_name": "Viva Cosmetics",
        "content": "626270031",
        "extra_content": "VivaCosmetics"
      },
      {
        "object_name": "Wardah Cosmetics",
        "content": "198385937",
        "extra_content": "wardahbeauty"
      },
      {
        "object_name": "Revlon Indonesia",
        "content": "99045087",
        "extra_content": "REVLONid"
      },
      {
        "object_name": "Mirabella Cosmetics",
        "content": "587062448",
        "extra_content": "Mirabella_MT"
      },
      {
        "object_name": "L'Oreal Paris ",
        "content": "188265681",
        "extra_content": "LorealParisID"
      },
      {
        "object_name": "Maybelline Indonesia",
        "content": "155828096",
        "extra_content": "MaybellineINA"
      },
      {
        "object_name": "inez cosmetics",
        "content": "257263497",
        "extra_content": "inezcosmetics"
      },
      {
        "object_name": "Oriflame Indonesia",
        "content": "394544327",
        "extra_content": "id_oriflame"
      },
      {
        "object_name": "myRed-A",
        "content": "809967026",
        "extra_content": "myRed_A"
      },
      {
        "object_name": "Cussons Mum & Me ID",
        "content": "474957832",
        "extra_content": "CussonsMumMe_ID"
      },
      {
        "object_name": "Zwitsal Indonesia",
        "content": "233412764",
        "extra_content": "zwitsal_id"
      },
      {
        "object_name": "ULTIMA II Indonesia",
        "content": "335697578",
        "extra_content": "ULTIMA_id"
      },
      {
        "object_name": "Caring Colours",
        "content": "156467389",
        "extra_content": "caring_colours"
      },
      {
        "object_name": "Garnier Indonesia",
        "content": "207009014",
        "extra_content": "GarnierID"
      },
      {
        "object_name": "Olay Indonesia",
        "content": "211795226",
        "extra_content": "OlayIndonesia"
      },
      {
        "object_name": "Rumah Cantik Citra",
        "content": "409884096",
        "extra_content": "CantikCitra"
      },
      {
        "object_name": "Purbasari ",
        "content": "1202921221",
        "extra_content": "Purbasari_ID"
      },
      {
        "object_name": "deoonard cream",
        "content": "382604703",
        "extra_content": "deoonardcream"
      },
      {
        "object_name": "gatsby_indonesia",
        "content": "301282757",
        "extra_content": "gatsby_id"
      },
      {
        "object_name": "Vivelle Care",
        "content": "236648699",
        "extra_content": "VivelleCare"
      },
      {
        "object_name": "Sahabat Eskulin",
        "content": "402119472",
        "extra_content": "EskulinID"
      },
      {
        "object_name": "SHE Cologne",
        "content": "381319176",
        "extra_content": "SHElalaland"
      },
      {
        "object_name": "Mustika Puteri",
        "content": "389999889",
        "extra_content": "MustikaPuteriID"
      },
      {
        "object_name": "Rexona",
        "content": "283800203",
        "extra_content": "rexona_id"
      },
      {
        "object_name": "Izzi Indonesia",
        "content": "558581091",
        "extra_content": "IzziLoveID"
      },
      {
        "object_name": "Marina",
        "content": "280340301",
        "extra_content": "SahabatMarina"
      },
      {
        "object_name": "AXE INDONESIA",
        "content": "73321156",
        "extra_content": "AXE_ID"
      },
      {
        "object_name": "Belia Martha Tilaar",
        "content": "164603509",
        "extra_content": "beliagurlzone"
      },
      {
        "object_name": "DOVE Indonesia",
        "content": "79124517",
        "extra_content": "Dove_IDN"
      },
      {
        "object_name": "The Body Shop Indo",
        "content": "46622069",
        "extra_content": "TheBodyShopIndo"
      },
      {
        "object_name": "Vaseline Indonesia",
        "content": "243579052",
        "extra_content": "VaselineID"
      },
      {
        "object_name": "Enchanteur Indonesia",
        "content": "384729967",
        "extra_content": "EnchanteurIndon"
      },
      {
        "object_name": "YSL Beauté Indonesia",
        "content": "47939115",
        "extra_content": "YSL_ID"
      },
      {
        "object_name": "NIVEA_ID",
        "content": "580858248",
        "extra_content": "NIVEA_ID"
      },
      {
        "object_name": "Sophie Paris",
        "content": "50533444",
        "extra_content": "Sophie_Paris"
      },
      {
        "object_name": "Allianz Indonesia",
        "content": "226496603",
        "extra_content": "AllianzId"
      },
      {
        "object_name": "Asuransi Jiwasraya",
        "content": "292244210",
        "extra_content": "Jiwasraya"
      },
      {
        "object_name": "AXA Mandiri",
        "content": "193746584",
        "extra_content": "AXA_Mandiri"
      },
      {
        "object_name": "BPJS Ketenagakerjaan",
        "content": "542377830",
        "extra_content": "BPJSTKinfo"
      },
      {
        "object_name": "AJB Bumiputera 1912",
        "content": "24661206",
        "extra_content": "bumiputera"
      },
      {
        "object_name": "Asuransi Prudential",
        "content": "98071977",
        "extra_content": "myprudential"
      },
      {
        "object_name": "Sequislife",
        "content": "531922321",
        "extra_content": "Sequislife"
      },
      {
        "object_name": "Asuransi Sinar Mas",
        "content": "945754298",
        "extra_content": "as_sinarmas"
      },
      {
        "object_name": "Panin Bank",
        "content": "291665919",
        "extra_content": "Panin_Bank"
      },
      {
        "object_name": "Jasa Raharja",
        "content": "148162901",
        "extra_content": "jasaraharja_pst"
      },
      {
        "object_name": "BANK BRI",
        "content": "1355939492",
        "extra_content": "BANKBRI_ID"
      },
      {
        "object_name": "BRIngin Life",
        "content": "437609420",
        "extra_content": "BRIngin_Life"
      },
      {
        "object_name": "BPJS INFO",
        "content": "933639002",
        "extra_content": "INFOBPJS"
      },
      {
        "object_name": "PT. ASKES (Persero)",
        "content": "179780971",
        "extra_content": "ptaskes"
      },
      {
        "object_name": "ACA Asuransi",
        "content": "221595064",
        "extra_content": "acaasuransi"
      },
      {
        "object_name": "bank mandiri",
        "content": "2278761810",
        "extra_content": "bankmandiri"
      },
      {
        "object_name": "ASURANSI SUN LIFE",
        "content": "1094913859",
        "extra_content": "asuransisunlife"
      },
      {
        "object_name": "Kartu Danamon",
        "content": "266012560",
        "extra_content": "kartudanamon"
      },
      {
        "object_name": "MNC Life Assurance®",
        "content": "424740045",
        "extra_content": "MNC_LIFE"
      },
      {
        "object_name": "ADIRA INSURANCE",
        "content": "265862418",
        "extra_content": "AdiraIns"
      },
      {
        "object_name": "Zurich Indonesia",
        "content": "926571758",
        "extra_content": "Zurich_ID"
      },
      {
        "object_name": "Commonwealth Bank ID",
        "content": "237176498",
        "extra_content": "CommBank_ID"
      },
      {
        "object_name": "Kratingdaeng",
        "content": "269575813",
        "extra_content": "Kratingdaeng"
      },
      {
        "object_name": "hemaviton",
        "content": "1343696706",
        "extra_content": "hemaviton_id"
      },
      {
        "object_name": "M150",
        "content": "1485835351",
        "extra_content": "M150ID"
      },
      {
        "object_name": "Proman 5 Jam",
        "content": "600582451",
        "extra_content": "Proman5Jam"
      },
      {
        "object_name": "Mizone Indonesia",
        "content": "104721285",
        "extra_content": "mizoneid"
      },
      {
        "object_name": "Pocari Sweat",
        "content": "121356723",
        "extra_content": "pocariID"
      },
      {
        "object_name": "ExtraJoss",
        "content": "131958396",
        "extra_content": "ExtraJossFans"
      },
      {
        "object_name": "KukuBima ENER-G!",
        "content": "862487654",
        "extra_content": "kukubima_energi"
      },
      {
        "object_name": "Coolant",
        "content": "273322456",
        "extra_content": "CoolantID"
      },
      {
        "object_name": "SUPERO2",
        "content": "390646699",
        "extra_content": "SuperO2"
      },
      {
        "object_name": "YouC1000 Isotonic",
        "content": "2374593996",
        "extra_content": "YouCIsotonic"
      },
      {
        "object_name": "Hydro Coco",
        "content": "145492923",
        "extra_content": "My_HydroCoco"
      },
      {
        "object_name": "Diary Kiranti ™",
        "content": "71295179",
        "extra_content": "DiaryKiranti"
      },
      {
        "object_name": "Fatigon Spirit",
        "content": "178155711",
        "extra_content": "Fatigon_Spirit"
      },
      {
        "object_name": "Gatorade",
        "content": "34369690",
        "extra_content": "Gatorade"
      },
      {
        "object_name": "L-Men #invincible",
        "content": "76540248",
        "extra_content": "LMen"
      },
      {
        "object_name": "hemaviton Jreng",
        "content": "2512233812",
        "extra_content": "ngejrengs"
      },
      {
        "object_name": "Kopi ABC",
        "content": "369380454",
        "extra_content": "kopimantapABC"
      },
      {
        "object_name": "CNI INDONESIA",
        "content": "490984704",
        "extra_content": "CNI_Corporate"
      },
      {
        "object_name": "Waktunya Kapal Api ",
        "content": "83326480",
        "extra_content": "KapalApi_ID"
      },
      {
        "object_name": "Kopi Jahe 41",
        "content": "204840876",
        "extra_content": "kopijahe41"
      },
      {
        "object_name": "Torabika Kedai Kopi",
        "content": "202934697",
        "extra_content": "Kedai_Torabika"
      },
      {
        "object_name": "Top Coffee",
        "content": "596305417",
        "extra_content": "TOPKopi"
      },
      {
        "object_name": "Anget Sari Jahe",
        "content": "1966797680",
        "extra_content": "AngetSariJahe"
      },
      {
        "object_name": "Kopi Luwak",
        "content": "433225382",
        "extra_content": "KafeKopiLuwak"
      },
      {
        "object_name": "NESCAFÉ Indonesia",
        "content": "359787354",
        "extra_content": "IniBaruHidup"
      },
      {
        "object_name": "Kopi ABC",
        "content": "369380454",
        "extra_content": "kopimantapABC"
      },
      {
        "object_name": "Aik Cheong Indonesia",
        "content": "192819860",
        "extra_content": "AikCheongIndo"
      },
      {
        "object_name": "Waktunya Kapal Api ",
        "content": "83326480",
        "extra_content": "KapalApi_ID"
      },
      {
        "object_name": "luwak white koffie",
        "content": "481726450",
        "extra_content": "luwakwhitekoffi"
      },
      {
        "object_name": "ayam merak (coffee)",
        "content": "338264874",
        "extra_content": "ayammerak_id"
      },
      {
        "object_name": "Sido Muncul Jahe",
        "content": "1949081294",
        "extra_content": "Sidojahe"
      },
      {
        "object_name": "Good Day Coffee",
        "content": "198758923",
        "extra_content": "GoodDayID"
      },
      {
        "object_name": "Kopiko 78°C",
        "content": "1307287196",
        "extra_content": "kopiko78"
      },
      {
        "object_name": "Sahabat Ibu",
        "content": "205153845",
        "extra_content": "sahabatibu"
      },
      {
        "object_name": "MamyPoko Indonesia",
        "content": "227761492",
        "extra_content": "MamyPokoID"
      },
      {
        "object_name": "Happynappyid",
        "content": "479424159",
        "extra_content": "Happynappyid"
      },
      {
        "object_name": "Kacang Garuda",
        "content": "142645111",
        "extra_content": "KacangGaruda"
      },
      {
        "object_name": "Dua Kelinci",
        "content": "183912287",
        "extra_content": "DuaKelinci"
      },
      {
        "object_name": "Girl Best Friend",
        "content": "151373307",
        "extra_content": "GirlBestFriend"
      },
      {
        "object_name": "Girls Room",
        "content": "252072725",
        "extra_content": "SoftexGirlsRoom"
      },
      {
        "object_name": "Pembalut Sehat Anion",
        "content": "1043872916",
        "extra_content": "AnionAsli"
      },
      {
        "object_name": "Pembalut Natesh",
        "content": "1168692492",
        "extra_content": "infopembalut"
      },
      {
        "object_name": "Kotex Dunia Cewe",
        "content": "102914577",
        "extra_content": "kotexduniacewe"
      },
      {
        "object_name": "SCo Indonesia",
        "content": "2185516880",
        "extra_content": "scoindonesia"
      },
      {
        "object_name": "Shine with Charm",
        "content": "352262188",
        "extra_content": "shinewithcharm"
      },
      {
        "object_name": "TEMPO.CO",
        "content": "18129942",
        "extra_content": "tempodotco"
      },
      {
        "object_name": "Kompas.com",
        "content": "23343960",
        "extra_content": "kompascom"
      },
      {
        "object_name": "VIVAnews",
        "content": "41730943",
        "extra_content": "VIVAnews"
      },
      {
        "object_name": "detikcom",
        "content": "69183155",
        "extra_content": "detikcom"
      },
      {
        "object_name": "ANTV",
        "content": "107799517",
        "extra_content": "whatsonANTV"
      },
      {
        "object_name": "TRANS7",
        "content": "124839730",
        "extra_content": "TRANS7"
      },
      {
        "object_name": "TRANS TV",
        "content": "125225621",
        "extra_content": "TRANSTV_CORP"
      },
      {
        "object_name": "SCTV",
        "content": "174601238",
        "extra_content": "SCTV_"
      },
      {
        "object_name": "RCTI Official",
        "content": "191384973",
        "extra_content": "OfficialRCTI"
      },
      {
        "object_name": "tvOneNews",
        "content": "55507370",
        "extra_content": "tvOneNews"
      },
      {
        "object_name": "METRO TV",
        "content": "57261519",
        "extra_content": "Metro_TV"
      },
      {
        "object_name": "Indosiar TV Official",
        "content": "927898040",
        "extra_content": "IndosiarTVtwit"
      },
      {
        "object_name": "NET.",
        "content": "978808357",
        "extra_content": "netmediatama"
      },
      {
        "object_name": "KOMPAS TV",
        "content": "71436318",
        "extra_content": "KompasTV"
      },
      {
        "object_name": "Global TV Indonesia",
        "content": "82837341",
        "extra_content": "Globaltvseru"
      },
      {
        "object_name": "MNCTV",
        "content": "213602126",
        "extra_content": "Official_MNCTV"
      },
      {
        "object_name": "On The Spot TRANS7",
        "content": "109310923",
        "extra_content": "Trans7OnTheSpot"
      },
      {
        "object_name": "IMB",
        "content": "148722108",
        "extra_content": "TRANS_IMB"
      },
      {
        "object_name": "Hitam Putih Trans|7",
        "content": "219961005",
        "extra_content": "HitamPutihT7"
      },
      {
        "object_name": "IndonesianIdolJunior",
        "content": "413022615",
        "extra_content": "IndonesianIdol"
      },
      {
        "object_name": "Liputan6.com",
        "content": "47596019",
        "extra_content": "liputan6dotcom"
      },
      {
        "object_name": "informasi selebriti",
        "content": "48890883",
        "extra_content": "inserttranstv"
      },
      {
        "object_name": "Mata Najwa",
        "content": "72274016",
        "extra_content": "MataNajwa"
      },
      {
        "object_name": "Kick Andy Show",
        "content": "72539067",
        "extra_content": "KickAndyShow"
      },
      {
        "object_name": "Mario Teguh Facebook",
        "content": "470745364",
        "extra_content": "MarioTeguhFB"
      },
      {
        "object_name": "dahSyat",
        "content": "74904593",
        "extra_content": "dahSyatMusik"
      },
      {
        "object_name": "Inbox SCTV",
        "content": "172729719",
        "extra_content": "InboxSCTV_"
      },
      {
        "object_name": "The Comment",
        "content": "1407232710",
        "extra_content": "TheComment_NET"
      },
      {
        "object_name": "bukanempatmata",
        "content": "278019870",
        "extra_content": "bukan4mata"
      },
      {
        "object_name": "Ini Talkshow NET.",
        "content": "2406546896",
        "extra_content": "Ini_Talkshow"
      },
      {
        "object_name": "Tonight Sho",
        "content": "2938865624",
        "extra_content": "tonightshow_net"
      },
      {
        "object_name": "Tetangga Masa Gitu?",
        "content": "2384879876",
        "extra_content": "TMG_NET"
      },
      {
        "object_name": "FTV SCTV",
        "content": "159412545",
        "extra_content": "FTV_SCTV"
      },
      {
        "object_name": "WIDE SHOT METRO TV",
        "content": "410168661",
        "extra_content": "wideshotmetrotv"
      },
      {
        "object_name": "dirautis",
        "content": "2527902469",
        "extra_content": "sketsatranstv"
      },
      {
        "object_name": "Stand Up Comedy",
        "content": "368275480",
        "extra_content": "standupmetrotv"
      },
      {
        "object_name": "Ceriwis TransTV",
        "content": "117021323",
        "extra_content": "ceriwis_transtv"
      },
      {
        "object_name": "Homestay Trans 7",
        "content": "210060993",
        "extra_content": "HomestayTrans7"
      },
      {
        "object_name": "ISENG BANGET Trans|7",
        "content": "537920204",
        "extra_content": "Isengbanget_T7"
      },
      {
        "object_name": "Bukan Sekedar Wayang",
        "content": "2594535174",
        "extra_content": "BSWayang_NET"
      },
      {
        "object_name": "86 NET.",
        "content": "2398092986",
        "extra_content": "86_NetTV"
      },
      {
        "object_name": "My Trip My Adventure",
        "content": "1492114878",
        "extra_content": "myTrip_myAdvntr"
      },
      {
        "object_name": "98.7 Gen fm Jakarta",
        "content": "41207735",
        "extra_content": "987Genfm"
      },
      {
        "object_name": "101Jakfm",
        "content": "133293130",
        "extra_content": "101Jakfm"
      },
      {
        "object_name": "Prambors Radio",
        "content": "34149837",
        "extra_content": "Prambors"
      },
      {
        "object_name": "99.1 DeltaFM Jakarta",
        "content": "38114509",
        "extra_content": "Delta_FM"
      },
      {
        "object_name": "OZ Radio Jakarta",
        "content": "33182692",
        "extra_content": "OZRadioJakarta"
      },
      {
        "object_name": "Trax FM Jakarta",
        "content": "60896214",
        "extra_content": "TraxFMJKT"
      },
      {
        "object_name": "89.6 I-Radio Jakarta",
        "content": "73102464",
        "extra_content": "Iradiojakarta"
      },
      {
        "object_name": "Mustang 88.0 Jakarta",
        "content": "74375319",
        "extra_content": "mustang88fm"
      },
      {
        "object_name": "97.9 FeMale Radio ",
        "content": "31371105",
        "extra_content": "979FeMaleRadio"
      },
      {
        "object_name": "GlobalFM Jakarta",
        "content": "44571893",
        "extra_content": "884GlobalFM"
      },
      {
        "object_name": "105.9 FM ARDAN Radio",
        "content": "100381991",
        "extra_content": "ardanradio"
      },
      {
        "object_name": "99ERS 100 FM Bandung",
        "content": "370457976",
        "extra_content": "99ersRadio_Bdg"
      },
      {
        "object_name": "87.6 Hard Rock FM",
        "content": "62748430",
        "extra_content": "hardrockfm"
      },
      {
        "object_name": "103.9 FM HITS Radio",
        "content": "506821469",
        "extra_content": "Hitsradiobdg"
      },
      {
        "object_name": "Urban Radio 102.5 FM",
        "content": "2246122160",
        "extra_content": "UrbanRadio254"
      },
      {
        "object_name": "V 106.6 FM",
        "content": "227607482",
        "extra_content": "VRadioFM"
      },
      {
        "object_name": "104,6 SindoTrijayaFM",
        "content": "88593647",
        "extra_content": "SindoTrijayaFM"
      },
      {
        "object_name": "95.1kisfm Jakarta",
        "content": "68998125",
        "extra_content": "kisfmjakarta"
      },
      {
        "object_name": "96.7HitzFM",
        "content": "2599219308",
        "extra_content": "967HitzFM"
      },
      {
        "object_name": "Tabloid GAUL",
        "content": "240134310",
        "extra_content": "tab_gaul"
      },
      {
        "object_name": "BINTANG Online",
        "content": "95854816",
        "extra_content": "TabloidBintang"
      },
      {
        "object_name": "Tabloid AURA",
        "content": "232047216",
        "extra_content": "TabloidAURA"
      },
      {
        "object_name": "Tabloid Phone3",
        "content": "147857366",
        "extra_content": "tabloidphone3"
      },
      {
        "object_name": "Tabloid PULSA",
        "content": "126273605",
        "extra_content": "tabloidpulsa"
      },
      {
        "object_name": "CHIP Indonesia",
        "content": "36036388",
        "extra_content": "CHIPIndonesia"
      },
      {
        "object_name": "Nakita",
        "content": "148694563",
        "extra_content": "TabloidNakita"
      },
      {
        "object_name": "Tabloid OTOMOTIF",
        "content": "135065939",
        "extra_content": "otomotifweekly"
      },
      {
        "object_name": "Cek & Ricek Digital",
        "content": "146378589",
        "extra_content": "cek_ricek"
      },
      {
        "object_name": "Tabloid RUMAH",
        "content": "58993857",
        "extra_content": "tabloidrumah"
      },
      {
        "object_name": "Tabloid Saji",
        "content": "249542507",
        "extra_content": "tabloidsaji"
      },
      {
        "object_name": "SWA Magazine Online",
        "content": "131123213",
        "extra_content": "swamagazine"
      },
      {
        "object_name": "MIX Marketing Comm.",
        "content": "131124821",
        "extra_content": "mixmarcomm"
      },
      {
        "object_name": "Portal Marketing",
        "content": "493913516",
        "extra_content": "marketingcoid"
      },
      {
        "object_name": "TechnoKonstruksi",
        "content": "783745201",
        "extra_content": "TechnoKonstruks"
      },
      {
        "object_name": "Majalah Swadaya",
        "content": "1391034980",
        "extra_content": "MSwadaya"
      },
      {
        "object_name": "Pengusaha Indonesia",
        "content": "196970678",
        "extra_content": "forumpengusaha"
      },
      {
        "object_name": "Majalah LuarBiasa",
        "content": "226485085",
        "extra_content": "LuarBiasaMagz"
      },
      {
        "object_name": "TEMPO.CO",
        "content": "18129942",
        "extra_content": "tempodotco"
      },
      {
        "object_name": "GATRANEWS",
        "content": "202559038",
        "extra_content": "GATRA_News"
      },
      {
        "object_name": "MAJALAH GOTIK",
        "content": "2286586416",
        "extra_content": "cerdaspolitik"
      },
      {
        "object_name": "INSPIRASI INDONESIA",
        "content": "271735185",
        "extra_content": "INSPIRASIMAGZ"
      },
      {
        "object_name": "Majalah Kartini",
        "content": "606252949",
        "extra_content": "MajalahKartini"
      },
      {
        "object_name": "Femina Indonesia",
        "content": "34979927",
        "extra_content": "FeminaMagazine"
      },
      {
        "object_name": "Cosmopolitan",
        "content": "150182138",
        "extra_content": "CosmoIndonesia"
      },
      {
        "object_name": "GADIS",
        "content": "40844022",
        "extra_content": "GADISmagz"
      },
      {
        "object_name": "ELLE Indonesia",
        "content": "116175671",
        "extra_content": "elleindonesia"
      },
      {
        "object_name": "MAJALAH UMMI",
        "content": "262536674",
        "extra_content": "majalahummi"
      },
      {
        "object_name": "Marie Claire ID",
        "content": "126222440",
        "extra_content": "MarieClaireID"
      },
      {
        "object_name": "Harper's Bazaar",
        "content": "109231670",
        "extra_content": "bazaarindonesia"
      },
      {
        "object_name": "- Tabloid Nurani -",
        "content": "195610868",
        "extra_content": "TabloidNurani"
      },
      {
        "object_name": "CLEO Indonesia",
        "content": "59403649",
        "extra_content": "cleo_ind"
      },
      {
        "object_name": "Gogirl! Magazine",
        "content": "361623562",
        "extra_content": "GogirlMagazine"
      },
      {
        "object_name": "KPK",
        "content": "104714478",
        "extra_content": "KPK_RI"
      },
      {
        "object_name": "Badan SAR Nasional",
        "content": "151319457",
        "extra_content": "SAR_NASIONAL"
      },
      {
        "object_name": "Kementerian Agama RI",
        "content": "175261567",
        "extra_content": "Kemenag_RI"
      },
      {
        "object_name": "Kementerian ESDM RI",
        "content": "244822420",
        "extra_content": "KESDM"
      },
      {
        "object_name": "KEMLU RI",
        "content": "160858057",
        "extra_content": "Portal_Kemlu_RI"
      },
      {
        "object_name": "Humas Kemenkumham",
        "content": "337900378",
        "extra_content": "Humas_Kumham"
      },
      {
        "object_name": "KementerianKehutanan",
        "content": "554953636",
        "extra_content": "Kemenhut"
      },
      {
        "object_name": "Kementerian Keuangan",
        "content": "600673907",
        "extra_content": "KemenkeuRI"
      },
      {
        "object_name": "KKP",
        "content": "1073300736",
        "extra_content": "KelautanKKP"
      },
      {
        "object_name": "Kemdikbud RI",
        "content": "631701837",
        "extra_content": "Kemdikbud_RI"
      },
      {
        "object_name": "Kementerian Kominfo",
        "content": "177848697",
        "extra_content": "kemkominfo"
      },
      {
        "object_name": "Kementerian PU",
        "content": "179835283",
        "extra_content": "KemenPU"
      },
      {
        "object_name": "Kemendag ",
        "content": "121293218",
        "extra_content": "Kemendag"
      },
      {
        "object_name": "KEMENTAN",
        "content": "104695582",
        "extra_content": "kementan"
      },
      {
        "object_name": "Kemenperin",
        "content": "482857866",
        "extra_content": "Kemenperin_RI"
      },
      {
        "object_name": "Kementerian Koperasi",
        "content": "244828429",
        "extra_content": "depkop"
      },
      {
        "object_name": "Humas KLH",
        "content": "352105169",
        "extra_content": "HumasKLH"
      },
      {
        "object_name": "Kemen PPN/Bappenas",
        "content": "235021856",
        "extra_content": "bappenas"
      },
      {
        "object_name": "Kemenpora-RI",
        "content": "1167461160",
        "extra_content": "KemenporaRI"
      },
      {
        "object_name": "gingerfabric",
        "content": "2560379390",
        "extra_content": "ristekgaul"
      },
      {
        "object_name": "Sekretariat Kabinet ",
        "content": "260686783",
        "extra_content": "setkabgoid"
      },
      {
        "object_name": "Pusat Penerangan TNI",
        "content": "594386753",
        "extra_content": "Puspen_TNI"
      },
      {
        "object_name": "Kemenko Polhukam RI",
        "content": "330044115",
        "extra_content": "Kemenkopolhukam"
      },
      {
        "object_name": "Arsip Nasional RI",
        "content": "1155994609",
        "extra_content": "ArsipNasionalRI"
      },
      {
        "object_name": "BPK RI",
        "content": "142718499",
        "extra_content": "bpkri"
      },
      {
        "object_name": "PPATK Indonesia",
        "content": "213523321",
        "extra_content": "PPATK"
      },
      {
        "object_name": "Biro Pusat Statistik",
        "content": "1419648715",
        "extra_content": "BPS_Indonesia"
      },
      {
        "object_name": "BMKG",
        "content": "108543358",
        "extra_content": "infoBMKG"
      },
      {
        "object_name": "TMC Polda Metro Jaya",
        "content": "76647722",
        "extra_content": "TMCPoldaMetro"
      },
      {
        "object_name": "PERSIB",
        "content": "174362532",
        "extra_content": "PersibOfficial"
      },
      {
        "object_name": "Oliver",
        "content": "43504153",
        "extra_content": "pmsnews"
      },
      {
        "object_name": "SRIWIJAYA FC",
        "content": "338313588",
        "extra_content": "_SriwijayaFC_"
      },
      {
        "object_name": "akun resmi",
        "content": "402612447",
        "extra_content": "deltras_fc"
      },
      {
        "object_name": "Semen Padang FC",
        "content": "427512265",
        "extra_content": "FCSemenPadang"
      },
      {
        "object_name": "Persija Jakarta",
        "content": "452040746",
        "extra_content": "Persija_Jkt"
      },
      {
        "object_name": "Persebaya Surabaya",
        "content": "553800796",
        "extra_content": "FCPERSEBAYA"
      },
      {
        "object_name": "Persijap Jepara",
        "content": "57336155",
        "extra_content": "Persijap"
      },
      {
        "object_name": "bontangfc_1988",
        "content": "420129234",
        "extra_content": "bontangfc_1988"
      },
      {
        "object_name": "Persema FC",
        "content": "466357930",
        "extra_content": "FCPERSEMA"
      },
      {
        "object_name": "PERSIPURA",
        "content": "394495827",
        "extra_content": "PERSIPURA_"
      },
      {
        "object_name": "PERSIRAM RAJA AMPAT",
        "content": "2289126990",
        "extra_content": "persiram_raja4"
      },
      {
        "object_name": "PS Barito Putera",
        "content": "279080112",
        "extra_content": "baritoputera"
      },
      {
        "object_name": "Mitra Kukar FC",
        "content": "199959984",
        "extra_content": "MitraKukar"
      },
      {
        "object_name": "Persisam Samarinda",
        "content": "169016352",
        "extra_content": "PersisamID"
      },
      {
        "object_name": "Persepam Madura Utd",
        "content": "852844975",
        "extra_content": "PersepamMadura"
      },
      {
        "object_name": "Gresik United FC",
        "content": "1945246452",
        "extra_content": "GresikUnited_FC"
      },
      {
        "object_name": "Persela12",
        "content": "172638303",
        "extra_content": "PerselaFC"
      },
      {
        "object_name": "Persita Tangerang",
        "content": "565552552",
        "extra_content": "PersitaOfficial"
      },
      {
        "object_name": "Persiba Bantul",
        "content": "73492535",
        "extra_content": "persiba"
      },
      {
        "object_name": "PERSERU SERUI PAPUA",
        "content": "1829183498",
        "extra_content": "PERSERU_SERUI"
      },
      {
        "object_name": "PERSIK Kediri",
        "content": "759399210",
        "extra_content": "Persik_ID"
      },
      {
        "object_name": "P Bandung Raya",
        "content": "1108197056",
        "extra_content": "pbandungrayafc"
      },
      {
        "object_name": "KABOMANIA",
        "content": "131131873",
        "extra_content": "PersikaboLovers"
      },
      {
        "object_name": "Persiraja Banda Aceh",
        "content": "303035364",
        "extra_content": "Persiraja"
      },
      {
        "object_name": "Partai HANURA",
        "content": "125323970",
        "extra_content": "PartaiHANURA"
      },
      {
        "object_name": "PDI Perjuangan",
        "content": "153407983",
        "extra_content": "PDI_Perjuangan"
      },
      {
        "object_name": "DPP PPP",
        "content": "219664498",
        "extra_content": "DPP_PPP"
      },
      {
        "object_name": "PKS",
        "content": "22365191",
        "extra_content": "PKSejahtera"
      },
      {
        "object_name": "DPP Partai Demokrat",
        "content": "248199104",
        "extra_content": "PDemokrat"
      },
      {
        "object_name": "Garda Pemuda NasDem",
        "content": "294020977",
        "extra_content": "PemudaNasDem"
      },
      {
        "object_name": "Partai Gerindra",
        "content": "397673651",
        "extra_content": "Gerindra"
      },
      {
        "object_name": "Partai Golkar",
        "content": "96055369",
        "extra_content": "Golkar5"
      },
      {
        "object_name": "Berita PKB ",
        "content": "748953283",
        "extra_content": "BeritaPKB"
      },
      {
        "object_name": "Partai Bulan Bintang",
        "content": "381045090",
        "extra_content": "DPPBulanBintang"
      },
      {
        "object_name": "Partai Nasional Aceh",
        "content": "890595338",
        "extra_content": "infoPNA12"
      },
      {
        "object_name": "Garuda Indonesia",
        "content": "155418706",
        "extra_content": "IndonesiaGaruda"
      },
      {
        "object_name": "merpati nusantara ",
        "content": "186915070",
        "extra_content": "merpatiairlines"
      },
      {
        "object_name": "PTPN XI",
        "content": "1669104925",
        "extra_content": "ptpn11"
      },
      {
        "object_name": "PT PUPUK SRIWIDJAJA",
        "content": "415522500",
        "extra_content": "pusripalembang"
      },
      {
        "object_name": "Perum Perhutani",
        "content": "343820073",
        "extra_content": "PerumPerhutani"
      },
      {
        "object_name": "Balai Pustaka",
        "content": "1487997206",
        "extra_content": "PTBalaiPustaka"
      },
      {
        "object_name": "Aneka Tambang",
        "content": "873694135",
        "extra_content": "OfficialAntam"
      },
      {
        "object_name": "PERTAMINA",
        "content": "171741891",
        "extra_content": "PTPERTAMINA"
      },
      {
        "object_name": "PT PLN (Persero)",
        "content": "558516132",
        "extra_content": "pln_123"
      },
      {
        "object_name": " PT INKA ( Persero)",
        "content": "81760735",
        "extra_content": "ptinka"
      },
      {
        "object_name": "PT Len Industri",
        "content": "187777894",
        "extra_content": "HumasLen"
      },
      {
        "object_name": "Telkom Indonesia",
        "content": "80204488",
        "extra_content": "TelkomIndonesia"
      },
      {
        "object_name": "Perum PFN",
        "content": "1667761592",
        "extra_content": "StudioPFN"
      },
      {
        "object_name": "Indosat",
        "content": "61379637",
        "extra_content": "IndosatMania"
      },
      {
        "object_name": "PT DAHANA (Persero)",
        "content": "243933283",
        "extra_content": "ptdahana"
      },
      {
        "object_name": "PT. PINDAD PERSERO",
        "content": "981625261",
        "extra_content": "PTPINDAD"
      },
      {
        "object_name": "PT GARAM PERSERO",
        "content": "305340427",
        "extra_content": "infogaram"
      },
      {
        "object_name": "POS INDONESIA",
        "content": "147137991",
        "extra_content": "PosIndonesia"
      },
      {
        "object_name": "raditya dika",
        "content": "47363197",
        "extra_content": "radityadika"
      },
      {
        "object_name": "Djenar Maesa Ayu",
        "content": "115969352",
        "extra_content": "djenarmaesaayu"
      },
      {
        "object_name": "Nia Dinata",
        "content": "193171585",
        "extra_content": "tehniadinata"
      },
      {
        "object_name": "Ndoro Kakung",
        "content": "18598424",
        "extra_content": "ndorokakung"
      },
      {
        "object_name": "MoammarEMKA",
        "content": "42386439",
        "extra_content": "moammaremka"
      },
      {
        "object_name": "Kang Abik",
        "content": "382609833",
        "extra_content": "h_elshirazy"
      },
      {
        "object_name": "Dewi 'Dee' Lestari",
        "content": "59427618",
        "extra_content": "deelestari"
      },
      {
        "object_name": "ariefmuhammad",
        "content": "65863622",
        "extra_content": "Poconggg"
      },
      {
        "object_name": "Trinity",
        "content": "70176620",
        "extra_content": "TrinityTraveler"
      },
      {
        "object_name": "AslmBeijingMovie",
        "content": "89745465",
        "extra_content": "asmanadia"
      },
      {
        "object_name": "Sitta Karina",
        "content": "34252697",
        "extra_content": "sittakarina"
      },
      {
        "object_name": "Clara Ng",
        "content": "64731626",
        "extra_content": "clara_ng"
      },
      {
        "object_name": "Vabyo Kedai1002Mimpi",
        "content": "103441005",
        "extra_content": "vabyo"
      },
      {
        "object_name": "Alanda Kariza",
        "content": "12450932",
        "extra_content": "alandakariza"
      },
      {
        "object_name": "Fira Basuki Baskoro",
        "content": "59405058",
        "extra_content": "FiraBasuki"
      },
      {
        "object_name": "Adhitya Mulya",
        "content": "39370252",
        "extra_content": "adhityamulya"
      },
      {
        "object_name": "Ninit Yunita ",
        "content": "6607292",
        "extra_content": "ninityunita"
      },
      {
        "object_name": "Fuadi Negeri5Menara",
        "content": "33439535",
        "extra_content": "fuadi1"
      },
      {
        "object_name": "bernard batubara",
        "content": "487360263",
        "extra_content": "benzbara_"
      },
      {
        "object_name": "Pidi Baiq",
        "content": "85796078",
        "extra_content": "pidibaiq"
      },
      {
        "object_name": "Marischka Prudence",
        "content": "43810001",
        "extra_content": "marischkaprue"
      },
      {
        "object_name": "Adis",
        "content": "118366830",
        "extra_content": "takdos"
      },
      {
        "object_name": "Ika Natassa",
        "content": "19799211",
        "extra_content": "ikanatassa"
      },
      {
        "object_name": "Rhein Fathia",
        "content": "14622093",
        "extra_content": "rheinfathia"
      },
      {
        "object_name": "Andrea Hirata",
        "content": "254819820",
        "extra_content": "Andreahirata"
      },
      {
        "object_name": "Claudia Kaunang",
        "content": "3719601",
        "extra_content": "ClaudiaKaunang"
      },
      {
        "object_name": "Wahyu Aditya",
        "content": "123552998",
        "extra_content": "maswaditya"
      },
      {
        "object_name": "windy ariestanty",
        "content": "86256689",
        "extra_content": "windyariestanty"
      },
      {
        "object_name": "Merry Riana",
        "content": "42381705",
        "extra_content": "MerryRiana"
      },
      {
        "object_name": "Iwan Setyawan",
        "content": "23167021",
        "extra_content": "Iwan9S10A"
      },
      {
        "object_name": "itasembiring",
        "content": "245756679",
        "extra_content": "theitasembiring"
      },
      {
        "object_name": "Dara Prayoga",
        "content": "44755860",
        "extra_content": "daraprayoga_"
      },
      {
        "object_name": "Alitt Susanto",
        "content": "78226378",
        "extra_content": "shitlicious"
      },
      {
        "object_name": "luna maya",
        "content": "128841198",
        "extra_content": "LunaMaya26"
      },
      {
        "object_name": "Sherina Sinna",
        "content": "33873560",
        "extra_content": "sherinasinna"
      },
      {
        "object_name": "bunga citra lestari",
        "content": "41626669",
        "extra_content": "bclsinclair"
      },
      {
        "object_name": "AGNEZ MO",
        "content": "42420346",
        "extra_content": "agnezmo"
      },
      {
        "object_name": "Ollaufar",
        "content": "59186139",
        "extra_content": "olla_ramlan"
      },
      {
        "object_name": "shireen sungkar",
        "content": "62469487",
        "extra_content": "shireensungkar"
      },
      {
        "object_name": "Raisa Andriana",
        "content": "63695781",
        "extra_content": "raisa6690"
      },
      {
        "object_name": "Jessica Iskandar",
        "content": "79986578",
        "extra_content": "jess_iskandar"
      },
      {
        "object_name": "Laudya cynthia bella",
        "content": "82648754",
        "extra_content": "Bellaudya829"
      },
      {
        "object_name": "Aluna Sagita Gutawa",
        "content": "90109872",
        "extra_content": "gitagut"
      },
      {
        "object_name": "juliaperez",
        "content": "100563581",
        "extra_content": "juliaperrez"
      },
      {
        "object_name": "Ayu Dewi",
        "content": "35472557",
        "extra_content": "mrsayudewi"
      },
      {
        "object_name": "Sandra Dewi",
        "content": "45278605",
        "extra_content": "SandraDewi88"
      },
      {
        "object_name": "memes",
        "content": "141379380",
        "extra_content": "memes605"
      },
      {
        "object_name": "cancan",
        "content": "2864314309",
        "extra_content": "ChantalConcetta"
      },
      {
        "object_name": "Donna Agnesia Wayong",
        "content": "150653366",
        "extra_content": "dagnesia"
      },
      {
        "object_name": "thalitalatief",
        "content": "50270513",
        "extra_content": "thalitalatief"
      },
      {
        "object_name": "Farah Quinn",
        "content": "104081479",
        "extra_content": "quinnfarah"
      },
      {
        "object_name": "Tasya Kamila",
        "content": "30261892",
        "extra_content": "tasyakamila"
      },
      {
        "object_name": "Andien Aisyah",
        "content": "42158074",
        "extra_content": "andienaisyah"
      },
      {
        "object_name": "Pevita Pearce ☮",
        "content": "43081642",
        "extra_content": "pevpearce"
      },
      {
        "object_name": "Wulan Guritno",
        "content": "45785789",
        "extra_content": "WulanGuritno"
      },
      {
        "object_name": "Mona Ratuliu",
        "content": "64127840",
        "extra_content": "mratuliu"
      },
      {
        "object_name": "dea mirella",
        "content": "90148517",
        "extra_content": "deamirella"
      },
      {
        "object_name": "Asmirandah Zantman",
        "content": "94487323",
        "extra_content": "itsmeAsmirandah"
      },
      {
        "object_name": "Happy-Salma",
        "content": "333283217",
        "extra_content": "Happy_Salma"
      },
      {
        "object_name": "Aura Kasih",
        "content": "308990162",
        "extra_content": "aurakasih87"
      },
      {
        "object_name": "Syahnaz Sadiqah",
        "content": "2332866356",
        "extra_content": "RealSyahnazS"
      },
      {
        "object_name": "KING",
        "content": "634569839",
        "extra_content": "_widikidiw_"
      },
      {
        "object_name": "Nikita Purnama Willy",
        "content": "459137961",
        "extra_content": "nikitawilly_24"
      },
      {
        "object_name": "Haruka Nakagawa",
        "content": "945492493",
        "extra_content": "HarukaN_JKT48"
      },
      {
        "object_name": "Sheryl Sheinafia",
        "content": "30407767",
        "extra_content": "sherylsheinafia"
      },
      {
        "object_name": "sarah sechan",
        "content": "61091504",
        "extra_content": "sarseh"
      },
      {
        "object_name": "Julie Estelle",
        "content": "96978059",
        "extra_content": "Julstelle"
      },
      {
        "object_name": "Sophie Navita Barata",
        "content": "80805951",
        "extra_content": "sophieNavita"
      },
      {
        "object_name": "Adinia Wirasti",
        "content": "129466350",
        "extra_content": "AdiniaWirasti"
      },
      {
        "object_name": "Rossa Roslaina",
        "content": "180396151",
        "extra_content": "mynameisrossa"
      },
      {
        "object_name": "Rakhmawatifitri",
        "content": "41566320",
        "extra_content": "fitrop"
      },
      {
        "object_name": "Anggun Official",
        "content": "24002803",
        "extra_content": "Anggun_Cipta"
      },
      {
        "object_name": "Cinta Laura Kiehl",
        "content": "76011258",
        "extra_content": "xcintakiehlx"
      },
      {
        "object_name": "rianti cartwright n.",
        "content": "67600610",
        "extra_content": "riantic"
      },
      {
        "object_name": "TRB",
        "content": "59378025",
        "extra_content": "TitiRajoBintang"
      },
      {
        "object_name": "nirina zubir",
        "content": "111566052",
        "extra_content": "nirina_zubir"
      },
      {
        "object_name": "Maudy Ayunda",
        "content": "29118268",
        "extra_content": "maudyayunda"
      },
      {
        "object_name": "Chelsea Islan",
        "content": "29742478",
        "extra_content": "chelseaislan"
      },
      {
        "object_name": "Kimberly Ryder",
        "content": "27395495",
        "extra_content": "kimbrlyryder"
      },
      {
        "object_name": "Sophia Latjuba",
        "content": "2817436956",
        "extra_content": "sophialatjuba88"
      },
      {
        "object_name": "Nabilah Ratna Ayu",
        "content": "433238416",
        "extra_content": "nabilahJKT48"
      },
      {
        "object_name": "Dian Sastrowardoyo",
        "content": "62289791",
        "extra_content": "therealDiSastr"
      },
      {
        "object_name": "Naysilla Mirdad",
        "content": "48991862",
        "extra_content": "naymirdad"
      },
      {
        "object_name": "Dinda Kanyadewi",
        "content": "137378562",
        "extra_content": "dindakanyaa"
      },
      {
        "object_name": "atiqah hasiholan",
        "content": "133603916",
        "extra_content": "atiqahhasiholan"
      },
      {
        "object_name": "MARSHANDA",
        "content": "25575954",
        "extra_content": "marshanda"
      },
      {
        "object_name": "Acha Septriasa",
        "content": "332595100",
        "extra_content": "septriasa_acha"
      },
      {
        "object_name": "zaskia adya mecca",
        "content": "77281062",
        "extra_content": "zaskiadyamecca"
      },
      {
        "object_name": "Velove Vexia",
        "content": "70613854",
        "extra_content": "Vaelovexia"
      },
      {
        "object_name": "zaskia sungkar",
        "content": "75481484",
        "extra_content": "zaskiasungkarIR"
      },
      {
        "object_name": "nia ramadhani",
        "content": "65863533",
        "extra_content": "NRamadhani"
      },
      {
        "object_name": "kinaryosih",
        "content": "89421335",
        "extra_content": "kinaryosih_03"
      },
      {
        "object_name": "nuri maulida",
        "content": "73938904",
        "extra_content": "nurimaulida"
      },
      {
        "object_name": "Ayudia C Bing Slamet",
        "content": "39152031",
        "extra_content": "ayudiac"
      },
      {
        "object_name": "Kirana Larasati",
        "content": "1173169994",
        "extra_content": "_kiranalara"
      },
      {
        "object_name": "Dinda Hauw",
        "content": "51370289",
        "extra_content": "dindahw"
      },
      {
        "object_name": "Tyas Mirasih",
        "content": "1133602298",
        "extra_content": "TyasMirasih8487"
      },
      {
        "object_name": "Raline Shah",
        "content": "134862498",
        "extra_content": "ralineshah"
      },
      {
        "object_name": "Prisia Nasution",
        "content": "133217964",
        "extra_content": "itsPrisia"
      },
      {
        "object_name": "Olga Lydia",
        "content": "57994978",
        "extra_content": "OlgaLy_DIA"
      },
      {
        "object_name": "Olivia Lubis Jensen",
        "content": "203950519",
        "extra_content": "OliveJensen"
      },
      {
        "object_name": "Yuki A. Kato",
        "content": "39212809",
        "extra_content": "yukikato"
      },
      {
        "object_name": "Christie Julia",
        "content": "71447363",
        "extra_content": "christiejulia"
      },
      {
        "object_name": "Tina Toon",
        "content": "70342092",
        "extra_content": "tinatoon93"
      },
      {
        "object_name": "Jessica Mila Agnesia",
        "content": "200610840",
        "extra_content": "Jscmila"
      },
      {
        "object_name": "Poppy Sovia",
        "content": "233250638",
        "extra_content": "popsovia"
      },
      {
        "object_name": "Ayu Hastari Hutami",
        "content": "43551890",
        "extra_content": "Ayuhastari"
      },
      {
        "object_name": "ALICE NORIN",
        "content": "57868178",
        "extra_content": "alicesofieNORIN"
      },
      {
        "object_name": "Audi Marissa☮",
        "content": "260541852",
        "extra_content": "audimarissa_"
      },
      {
        "object_name": "NindyParasadyHarsono",
        "content": "82120414",
        "extra_content": "nindysings"
      },
      {
        "object_name": "Ardina Rasti",
        "content": "46096164",
        "extra_content": "ardinarasti6"
      },
      {
        "object_name": "Titi Kamal",
        "content": "68997312",
        "extra_content": "Titi_KamaLL"
      },
      {
        "object_name": "TITI DJ",
        "content": "85536744",
        "extra_content": "ti2dj"
      },
      {
        "object_name": "nadya hutagalung",
        "content": "23199959",
        "extra_content": "Nadya_HutaGalng"
      },
      {
        "object_name": "Shandy Aulia",
        "content": "119405098",
        "extra_content": "shandy_aulia"
      },
      {
        "object_name": "rachel maryam",
        "content": "580022688",
        "extra_content": "cumarachel"
      },
      {
        "object_name": "tike priatnakusumah",
        "content": "59317956",
        "extra_content": "tikeprie"
      },
      {
        "object_name": "Ersa Mayori",
        "content": "41263189",
        "extra_content": "ersamayori"
      },
      {
        "object_name": "dewi rezer",
        "content": "47038176",
        "extra_content": "rezerdewi"
      },
      {
        "object_name": "Soimah",
        "content": "123206116",
        "extra_content": "showimah"
      },
      {
        "object_name": "Noni Anisah",
        "content": "95934677",
        "extra_content": "donitabhubiy"
      },
      {
        "object_name": "Gracia Indri",
        "content": "66104231",
        "extra_content": "Graciaz14"
      },
      {
        "object_name": "Kartika Putri",
        "content": "136148489",
        "extra_content": "KarthykaPutri"
      },
      {
        "object_name": "Marcella Zalianty",
        "content": "185681164",
        "extra_content": "mzalianty80"
      },
      {
        "object_name": "Millane Fernandez",
        "content": "268404340",
        "extra_content": "millanef"
      },
      {
        "object_name": "Chelsea Olivia",
        "content": "130496393",
        "extra_content": "chelseaolivia92"
      },
      {
        "object_name": "nadine chandrawinata",
        "content": "61266736",
        "extra_content": "nadinelist"
      },
      {
        "object_name": "MelaneyRicardoLynch",
        "content": "47216870",
        "extra_content": "MelaneyRicardo"
      },
      {
        "object_name": "Intan Nuraini",
        "content": "104073491",
        "extra_content": "intanuraini"
      },
      {
        "object_name": "cindybernadettesatow",
        "content": "34876473",
        "extra_content": "cindybernadette"
      },
      {
        "object_name": "Laura Basuki",
        "content": "196812864",
        "extra_content": "LauraBas"
      },
      {
        "object_name": "melly goeslaw",
        "content": "129739018",
        "extra_content": "melly_goeslaw"
      },
      {
        "object_name": "indy barends",
        "content": "63004239",
        "extra_content": "indybarends"
      },
      {
        "object_name": "dewi sandra killick",
        "content": "40849552",
        "extra_content": "dewisandra"
      },
      {
        "object_name": "shanty",
        "content": "54982739",
        "extra_content": "shanty78"
      },
      {
        "object_name": "Nagita Slavina ",
        "content": "45825579",
        "extra_content": "Lady6igi"
      },
      {
        "object_name": "Syahrini",
        "content": "157998843",
        "extra_content": "PrincesSyahrini"
      },
      {
        "object_name": "Aurelie Hermansyah",
        "content": "56976006",
        "extra_content": "aurelhermansyah"
      },
      {
        "object_name": "Prilly Latuconsina",
        "content": "131536053",
        "extra_content": "PrillyBie"
      },
      {
        "object_name": "Enzy Storia L.",
        "content": "81554400",
        "extra_content": "EnzyStoria"
      },
      {
        "object_name": "Zaskia Nagaswara",
        "content": "543345495",
        "extra_content": "Zaskia_Gotix"
      },
      {
        "object_name": "Gisella Anastasia",
        "content": "48562147",
        "extra_content": "gisel_la"
      },
      {
        "object_name": "Ariel Tatum",
        "content": "64674804",
        "extra_content": "arieltatum"
      },
      {
        "object_name": "Sharena Delon",
        "content": "59413896",
        "extra_content": "MissSharena"
      },
      {
        "object_name": "Kade Devie",
        "content": "92010531",
        "extra_content": "kddevie"
      },
      {
        "object_name": "Poppy bunga",
        "content": "135536658",
        "extra_content": "_PoppyBunga"
      },
      {
        "object_name": "Dhini Aminarti",
        "content": "161331628",
        "extra_content": "dhiniaminarti29"
      },
      {
        "object_name": "Cut Ratu Meyriska",
        "content": "96980618",
        "extra_content": "cutmeyriska"
      },
      {
        "object_name": "Eva Celia Lesmana",
        "content": "130018366",
        "extra_content": "evaceliaa"
      },
      {
        "object_name": "Nina Zatulini Munaf",
        "content": "65807028",
        "extra_content": "NinaZatulini"
      },
      {
        "object_name": "Nafa urbach",
        "content": "71328116",
        "extra_content": "nafaurbach15"
      },
      {
        "object_name": "Nova Eliza",
        "content": "33241838",
        "extra_content": "novaeliza"
      },
      {
        "object_name": "Mieke Amalia ",
        "content": "47661658",
        "extra_content": "mieke_amalia"
      },
      {
        "object_name": "paula allodya item",
        "content": "50342344",
        "extra_content": "aawdee_uwais"
      },
      {
        "object_name": "Ashanty..",
        "content": "238028607",
        "extra_content": "ashantysiddik"
      },
      {
        "object_name": "Astrid Sartiasari",
        "content": "61166251",
        "extra_content": "astridbasjar"
      },
      {
        "object_name": "Putri Titian",
        "content": "66773523",
        "extra_content": "tiaaaaan"
      },
      {
        "object_name": "Mikha Tambayong",
        "content": "34656033",
        "extra_content": "maudymikha"
      },
      {
        "object_name": "Citra Kirana",
        "content": "53708262",
        "extra_content": "citraciki"
      },
      {
        "object_name": "Ahok Basuki TPurnama",
        "content": "115286138",
        "extra_content": "basuki_btp"
      },
      {
        "object_name": "Hatta Rajasa",
        "content": "156691421",
        "extra_content": "hattarajasa"
      },
      {
        "object_name": "Moh. Mahfud MD",
        "content": "282006208",
        "extra_content": "mohmahfudmd"
      },
      {
        "object_name": "Joko Widodo",
        "content": "366987179",
        "extra_content": "jokowi_do2"
      },
      {
        "object_name": "Anas Urbaningrum",
        "content": "38643467",
        "extra_content": "anasurbaningrum"
      },
      {
        "object_name": "Prabowo Subianto",
        "content": "40580714",
        "extra_content": "Prabowo08"
      },
      {
        "object_name": "Yusril Ihza Mahendra",
        "content": "434724503",
        "extra_content": "Yusrilihza_Mhd"
      },
      {
        "object_name": "DahlanIskan",
        "content": "551529416",
        "extra_content": "iskan_dahlan"
      },
      {
        "object_name": "Tifatul Sembiring",
        "content": "83867535",
        "extra_content": "tifsembiring"
      },
      {
        "object_name": "Jusuf Kalla",
        "content": "903172238",
        "extra_content": "Pak_JK"
      },
      {
        "object_name": "Fadjroel Rachman",
        "content": "18158130",
        "extra_content": "fadjroeL"
      },
      {
        "object_name": "#SerulingBambu...",
        "content": "101156777",
        "extra_content": "IndraJPiliang"
      },
      {
        "object_name": "Alissa Wahid",
        "content": "108375032",
        "extra_content": "AlissaWahid"
      },
      {
        "object_name": "Budiman Sudjatmiko",
        "content": "183217247",
        "extra_content": "budimandjatmiko"
      },
      {
        "object_name": "benhan",
        "content": "18326714",
        "extra_content": "benhan"
      },
      {
        "object_name": "Ulil Abshar Abdalla",
        "content": "18359715",
        "extra_content": "ulil"
      },
      {
        "object_name": "Kahfi Siregar",
        "content": "201621697",
        "extra_content": "kahfi_siregar"
      },
      {
        "object_name": "wimar",
        "content": "7807472",
        "extra_content": "wimar"
      },
      {
        "object_name": "H. Fauzi Bowo",
        "content": "140719294",
        "extra_content": "bangfauzibowo"
      },
      {
        "object_name": "Pramono Anung ",
        "content": "151313825",
        "extra_content": "pramonoanung"
      },
      {
        "object_name": "Poppy Dharsono",
        "content": "185980124",
        "extra_content": "PoppyDharsono"
      },
      {
        "object_name": "Lukman H. Saifuddin",
        "content": "198860948",
        "extra_content": "lukmansaifuddin"
      },
      {
        "object_name": "Marzuki Alie Dr.H.",
        "content": "208784759",
        "extra_content": "marzukialie_MA"
      },
      {
        "object_name": "boediono",
        "content": "43836054",
        "extra_content": "boediono"
      },
      {
        "object_name": "Hidayat Nur Wahid",
        "content": "86012022",
        "extra_content": "hnurwahid"
      },
      {
        "object_name": "Ruhut Sitompul",
        "content": "219244515",
        "extra_content": "ruhutsitompul"
      },
      {
        "object_name": "VJ Daniel Mananta",
        "content": "17284624",
        "extra_content": "vjdaniel"
      },
      {
        "object_name": "Vidi Aldiano",
        "content": "42513459",
        "extra_content": "vidialdiano"
      },
      {
        "object_name": "Deddy Mahendra Desta",
        "content": "45556398",
        "extra_content": "desta80s"
      },
      {
        "object_name": "syahronie",
        "content": "179101102",
        "extra_content": "corbuzer"
      },
      {
        "object_name": "ringgo agus rahman",
        "content": "49831471",
        "extra_content": "ringgoagus"
      },
      {
        "object_name": "Latuihamallo",
        "content": "58546044",
        "extra_content": "GlennFredly"
      },
      {
        "object_name": "Gading Marten",
        "content": "71755580",
        "extra_content": "gadiiing"
      },
      {
        "object_name": "SEPERTI LEGENDA",
        "content": "81567882",
        "extra_content": "armandmaulana"
      },
      {
        "object_name": "Kevin Aprilio",
        "content": "92907248",
        "extra_content": "apriliokevin"
      },
      {
        "object_name": "afgansyah reza",
        "content": "94339403",
        "extra_content": "afgansyah_reza"
      },
      {
        "object_name": "Rio dewanto",
        "content": "120180219",
        "extra_content": "Riodewantoo"
      },
      {
        "object_name": "Vino G.Bastian",
        "content": "80521629",
        "extra_content": "_VinoGBastian"
      },
      {
        "object_name": "Raffi Ahmad",
        "content": "401866664",
        "extra_content": "RaffiAhmadLagi"
      },
      {
        "object_name": "Olga Syahputra",
        "content": "2269050008",
        "extra_content": "OlgaSyahputra82"
      },
      {
        "object_name": "Anjasmara Prasetya",
        "content": "37124701",
        "extra_content": "anjasmara"
      },
      {
        "object_name": "Tukul Arwana",
        "content": "394758448",
        "extra_content": "TukulWongNdeso"
      },
      {
        "object_name": "tor_ASU_diro",
        "content": "47652342",
        "extra_content": "t_ORASUDI_ro"
      },
      {
        "object_name": "Nicholas Saputra",
        "content": "19709272",
        "extra_content": "nicsap"
      },
      {
        "object_name": "Irwansyah",
        "content": "803722118",
        "extra_content": "Irwansyah_zs"
      },
      {
        "object_name": "Evan Sanders",
        "content": "27341522",
        "extra_content": "evansanders_id"
      },
      {
        "object_name": "Aliando Syarief",
        "content": "323094984",
        "extra_content": "alysyarief"
      },
      {
        "object_name": "Al Ghazali Kohler",
        "content": "2476521288",
        "extra_content": "AlKohler7"
      },
      {
        "object_name": "Joe Taslim",
        "content": "97633553",
        "extra_content": "Joe_Taslim"
      },
      {
        "object_name": "Iko Uwais",
        "content": "111378946",
        "extra_content": "iko_uwais"
      },
      {
        "object_name": "randy pangalila",
        "content": "2547382220",
        "extra_content": "randpunk90"
      },
      {
        "object_name": "Boy Hamzah",
        "content": "128387845",
        "extra_content": "boyhamzah"
      },
      {
        "object_name": "chicco jerikho ",
        "content": "90275269",
        "extra_content": "cjerikho829"
      },
      {
        "object_name": "Fedi Nuril",
        "content": "37414097",
        "extra_content": "realfedinuril"
      },
      {
        "object_name": "Tulus",
        "content": "90629215",
        "extra_content": "tulusm"
      },
      {
        "object_name": "Judikajude",
        "content": "118990067",
        "extra_content": "Judikajude"
      },
      {
        "object_name": "Sandhy SonDoro",
        "content": "198804836",
        "extra_content": "SondoroMusic"
      },
      {
        "object_name": "Rio Febrian",
        "content": "65288152",
        "extra_content": "riofebrian25"
      },
      {
        "object_name": "petra j. sihombing",
        "content": "45085657",
        "extra_content": "petra_sihombing"
      },
      {
        "object_name": "Marcello Tahitoe",
        "content": "80371421",
        "extra_content": "MarcelloTahitoe"
      },
      {
        "object_name": "Marcell siahaan",
        "content": "361398567",
        "extra_content": "mkhshn"
      },
      {
        "object_name": "Mike Mohede ",
        "content": "392843951",
        "extra_content": "MichaelMohede"
      },
      {
        "object_name": "Bebi Romeo Official",
        "content": "1026564584",
        "extra_content": "bebiromeo2"
      },
      {
        "object_name": "Dhani Ahmad Prasetyo",
        "content": "200071462",
        "extra_content": "AHMADDHANIPRAST"
      },
      {
        "object_name": "Denny Wahyudi",
        "content": "78223605",
        "extra_content": "DennyCagur"
      },
      {
        "object_name": "narji cagur",
        "content": "193245346",
        "extra_content": "AbangNarjiCagur"
      },
      {
        "object_name": "Wendi Cagur",
        "content": "2349511982",
        "extra_content": "WCIndonesia"
      },
      {
        "object_name": "andhika pratama",
        "content": "114761346",
        "extra_content": "dhikacungkring"
      },
      {
        "object_name": "TeukuWisnu-Abu Adam",
        "content": "237127238",
        "extra_content": "teukuwisnu2"
      },
      {
        "object_name": "dude harlino",
        "content": "195996154",
        "extra_content": "dude2harlino"
      },
      {
        "object_name": "Vicky Nitinegoro ⚡",
        "content": "133433386",
        "extra_content": "vickykciv"
      },
      {
        "object_name": "Samuel Rizal Arifin",
        "content": "2181924775",
        "extra_content": "samuelrizal01"
      },
      {
        "object_name": "Herjunot Ali",
        "content": "1844091452",
        "extra_content": "Herjunot7Ali"
      },
      {
        "object_name": "Ahmad JalaluddinRumi",
        "content": "86514229",
        "extra_content": "El8Rumi"
      },
      {
        "object_name": "Dimas Beck ",
        "content": "48705906",
        "extra_content": "dimasbeck_"
      },
      {
        "object_name": "Ryan Delon Situmeang",
        "content": "629915041",
        "extra_content": "MrRD_sit"
      },
      {
        "object_name": "Ricky Harun",
        "content": "957372240",
        "extra_content": "RickyHarun45MF"
      },
      {
        "object_name": "adipati",
        "content": "52059874",
        "extra_content": "adiipati"
      },
      {
        "object_name": "oka antara",
        "content": "83387425",
        "extra_content": "okaantara"
      },
      {
        "object_name": "Baim Wong",
        "content": "222163135",
        "extra_content": "_baimwong"
      },
      {
        "object_name": "Christian Sugiono",
        "content": "46847815",
        "extra_content": "csugiono"
      },
      {
        "object_name": "H Saipul Jamil SH",
        "content": "106369535",
        "extra_content": "saipul_jamil"
      },
      {
        "object_name": "Irfan Hakim",
        "content": "53857561",
        "extra_content": "irfanhakim"
      },
      {
        "object_name": "Andi Arsyil Rahman",
        "content": "80789999",
        "extra_content": "arsyilrahman"
      },
      {
        "object_name": "Ruben Onsu",
        "content": "2483202024",
        "extra_content": "ruben_onsu"
      },
      {
        "object_name": "VJ Boy William",
        "content": "105097066",
        "extra_content": "boywilliam"
      },
      {
        "object_name": "Uya Emang Kuya",
        "content": "240524719",
        "extra_content": "UyaKuya_SCTV"
      },
      {
        "object_name": "indra herlambang",
        "content": "40790000",
        "extra_content": "indraherlambang"
      },
      {
        "object_name": "OFC Fans IvanGunawan",
        "content": "2467202068",
        "extra_content": "OFCIvanGunawan"
      },
      {
        "object_name": "sammy simorangkir",
        "content": "442682422",
        "extra_content": "sammy0809SmrgkR"
      },
      {
        "object_name": "Choky Sitohang",
        "content": "83871706",
        "extra_content": "VictorySitohang"
      },
      {
        "object_name": "R E H ",
        "content": "77487882",
        "extra_content": "reu_reu"
      },
      {
        "object_name": "Ramzi",
        "content": "230196253",
        "extra_content": "ramzi_tebe"
      },
      {
        "object_name": "putra nababan",
        "content": "100524721",
        "extra_content": "PutraNababan"
      },
      {
        "object_name": "Teras Tina Talisa",
        "content": "613408437",
        "extra_content": "TerasTinaTalisa"
      },
      {
        "object_name": "Desi Anwar",
        "content": "14072001",
        "extra_content": "desianwar"
      },
      {
        "object_name": "Karni ilyas",
        "content": "148472804",
        "extra_content": "karniilyas"
      },
      {
        "object_name": "Najwa Shihab",
        "content": "16912985",
        "extra_content": "NajwaShihab"
      },
      {
        "object_name": "Tommy Tjokro",
        "content": "43311519",
        "extra_content": "Tomtjok"
      },
      {
        "object_name": "Budiono Darsono",
        "content": "63131281",
        "extra_content": "budionodarsono"
      },
      {
        "object_name": "Fifi Aleyda Yahya",
        "content": "141489806",
        "extra_content": "FifiAleyda"
      },
      {
        "object_name": "Rosianna Silalahi",
        "content": "111224127",
        "extra_content": "Rosianna766Hi"
      },
      {
        "object_name": "Meutya Hafid",
        "content": "58416680",
        "extra_content": "meutya_hafid"
      },
      {
        "object_name": "@jeremy-teti",
        "content": "1487853086",
        "extra_content": "_jeremyteti"
      },
      {
        "object_name": "Marissa Anita",
        "content": "33900336",
        "extra_content": "MarissaAnita"
      },
      {
        "object_name": "senandung nacita",
        "content": "98567644",
        "extra_content": "s_nacita"
      },
      {
        "object_name": "Sandrina Malakiano",
        "content": "148377283",
        "extra_content": "smalakiano"
      },
      {
        "object_name": "Frida Lidwina",
        "content": "100957100",
        "extra_content": "flidwina"
      },
      {
        "object_name": "Prita Laura",
        "content": "71251254",
        "extra_content": "Pritalaura"
      },
      {
        "object_name": "Gadiza Fauzi",
        "content": "111810132",
        "extra_content": "gadizafauzi"
      },
      {
        "object_name": "Isyana Bagoes Oka",
        "content": "180218872",
        "extra_content": "IsyanaBagoesOka"
      },
      {
        "object_name": "Eva Julianti Ali",
        "content": "372590910",
        "extra_content": "e_julianti"
      },
      {
        "object_name": "Zelda Savitri",
        "content": "38427396",
        "extra_content": "zeld_ung"
      },
      {
        "object_name": "Kania Sutisnawinata",
        "content": "123710980",
        "extra_content": "KaniaSwinata"
      },
      {
        "object_name": "Aviani Malik",
        "content": "66966997",
        "extra_content": "AviMalik"
      },
      {
        "object_name": "zackia arfan",
        "content": "46629142",
        "extra_content": "zackiarfan"
      },
      {
        "object_name": "Rike Amru",
        "content": "190945503",
        "extra_content": "RikeAmru"
      },
      {
        "object_name": "Nova Rini",
        "content": "59279470",
        "extra_content": "nova_rini"
      },
      {
        "object_name": "Juanita Wiratmaja ",
        "content": "51070088",
        "extra_content": "Juanita_Aline"
      },
      {
        "object_name": "Anastasya Putri SCTV",
        "content": "88415618",
        "extra_content": "me_putri"
      },
      {
        "object_name": "Bayu Sutiyono",
        "content": "185617844",
        "extra_content": "Bayusutiyono"
      },
      {
        "object_name": "Adriana Bustami",
        "content": "800583619",
        "extra_content": "dianabustami"
      },
      {
        "object_name": "Ferissa Djohan",
        "content": "184732578",
        "extra_content": "fer_djo"
      },
      {
        "object_name": "NOAH",
        "content": "102928627",
        "extra_content": "NOAH_ID"
      },
      {
        "object_name": "Slank Band",
        "content": "17166826",
        "extra_content": "slankdotcom"
      },
      {
        "object_name": "SMASH Indonesia",
        "content": "211089590",
        "extra_content": "SMASHindonesia"
      },
      {
        "object_name": "Cherrybelle (Chibi)",
        "content": "260802176",
        "extra_content": "Cherrybelleindo"
      },
      {
        "object_name": "VIERRATALE",
        "content": "280853501",
        "extra_content": "Vierratale"
      },
      {
        "object_name": "Official KOTAK",
        "content": "289256930",
        "extra_content": "kotakband_"
      },
      {
        "object_name": "GEISHA",
        "content": "70704606",
        "extra_content": "geishaindonesia"
      },
      {
        "object_name": "Superman Is Dead",
        "content": "77950723",
        "extra_content": "SID_Official"
      },
      {
        "object_name": "d'MasivBand Official",
        "content": "94466609",
        "extra_content": "dmasivband"
      },
      {
        "object_name": "Bondan&Fade2Black",
        "content": "97694536",
        "extra_content": "BondanF2B"
      },
      {
        "object_name": "Nidji",
        "content": "67956486",
        "extra_content": "nidji"
      },
      {
        "object_name": "ENDANK SOEKAMTI",
        "content": "108209018",
        "extra_content": "EndankSoekamti_"
      },
      {
        "object_name": "Gugun Blues Shelter",
        "content": "145639147",
        "extra_content": "GBluesShelter"
      },
      {
        "object_name": "ADA BAND",
        "content": "168039629",
        "extra_content": "ADA_INDONESIA"
      },
      {
        "object_name": "Princess  Girlband",
        "content": "368383245",
        "extra_content": "Princess_Ind"
      },
      {
        "object_name": "LAST CHILD(official)",
        "content": "40447086",
        "extra_content": "myLASTCHILD"
      },
      {
        "object_name": "Pagi Pulang Pagi",
        "content": "106017763",
        "extra_content": "band_Armada"
      },
      {
        "object_name": "PAS Band",
        "content": "337638885",
        "extra_content": "PASbandOfficial"
      },
      {
        "object_name": "The Brandals/BRNDLS",
        "content": "35986763",
        "extra_content": "Thebrandals"
      },
      {
        "object_name": "ALEXA",
        "content": "39446801",
        "extra_content": "ALEXAtheBand"
      },
      {
        "object_name": "MALIQ & D'ESSENTIALS",
        "content": "69220528",
        "extra_content": "MaliqMusic"
      },
      {
        "object_name": "The Changcuters",
        "content": "70012257",
        "extra_content": "twitchangcuters"
      },
      {
        "object_name": "KERISPATIH",
        "content": "71511957",
        "extra_content": "kerispatih_band"
      },
      {
        "object_name": "Sheila On 7",
        "content": "17959104",
        "extra_content": "sheilaon7"
      },
      {
        "object_name": "GIGI ",
        "content": "132505114",
        "extra_content": "GIGI_Band"
      },
      {
        "object_name": "Kangen Band Official",
        "content": "1021538930",
        "extra_content": "KANGENband_"
      },
      {
        "object_name": "NAIF",
        "content": "83668362",
        "extra_content": "Naifband"
      },
      {
        "object_name": "The SIGIT",
        "content": "17533735",
        "extra_content": "thesigit"
      },
      {
        "object_name": "REPVBLIK Official",
        "content": "293380466",
        "extra_content": "Repvblik_IND"
      },
      {
        "object_name": "UNGU Official Tweet",
        "content": "141086093",
        "extra_content": "UNGU_Tweet"
      },
      {
        "object_name": "Kahitna",
        "content": "84981762",
        "extra_content": "KahitnaFull"
      },
      {
        "object_name": "Yovie & Nuno",
        "content": "124126578",
        "extra_content": "yovieandnuno"
      },
      {
        "object_name": "The Overtunes",
        "content": "480157472",
        "extra_content": "TheOvertunes"
      },
      {
        "object_name": "LYLA™INDONESIA",
        "content": "79386758",
        "extra_content": "LYLAINDONESIA"
      },
      {
        "object_name": "/rif",
        "content": "90211008",
        "extra_content": "__rif"
      },
      {
        "object_name": "Andra & the BackBone",
        "content": "82592435",
        "extra_content": "ABackBone"
      },
      {
        "object_name": "COKELAT Band",
        "content": "96882719",
        "extra_content": "COKELATband"
      },
      {
        "object_name": "CJR indonesia ",
        "content": "2375343828",
        "extra_content": "cjrcomate31"
      },
      {
        "object_name": "écoutez!",
        "content": "60929947",
        "extra_content": "ecoutez_ekute"
      },
      {
        "object_name": "FIVEMINUTESBAND",
        "content": "550106260",
        "extra_content": "FiveMinutes_FM"
      },
      {
        "object_name": "Wali Band Official",
        "content": "103240741",
        "extra_content": "bandwali"
      },
      {
        "object_name": "White Shoes",
        "content": "49385570",
        "extra_content": "wsatcc"
      },
      {
        "object_name": "FANS D'BAGINDAS BAND",
        "content": "1121379247",
        "extra_content": "Bagindaria_ID_"
      },
      {
        "object_name": "D'Cinnamons Acoustic",
        "content": "67221570",
        "extra_content": "dcinnamonsband"
      },
      {
        "object_name": "Dewa19",
        "content": "156970629",
        "extra_content": "DE19WA"
      },
      {
        "object_name": "J-ROCKS Satu Spirit",
        "content": "111234549",
        "extra_content": "JROCKS1spirit"
      },
      {
        "object_name": "JAMRUD Official",
        "content": "387555606",
        "extra_content": "JamrudBand"
      },
      {
        "object_name": "Jikustik Band",
        "content": "17359370",
        "extra_content": "Jikustik"
      },
      {
        "object_name": "official JKT48",
        "content": "351535962",
        "extra_content": "officialJKT48"
      },
      {
        "object_name": "MOCCA",
        "content": "45789843",
        "extra_content": "moccaofficial"
      },
      {
        "object_name": "NaFF Official",
        "content": "206810497",
        "extra_content": "NaFF_Band"
      },
      {
        "object_name": "Netral Official",
        "content": "455809743",
        "extra_content": "netral_official"
      },
      {
        "object_name": "project pop",
        "content": "49287025",
        "extra_content": "projectpop"
      },
      {
        "object_name": "radja band official",
        "content": "168524878",
        "extra_content": "radja_band"
      },
      {
        "object_name": "RAN",
        "content": "53582241",
        "extra_content": "RANforyourlife"
      },
      {
        "object_name": "Seventeen Official",
        "content": "96989653",
        "extra_content": "SeventeenBand"
      },
      {
        "object_name": "Tukang Rap",
        "content": "21626792",
        "extra_content": "saykoji"
      },
      {
        "object_name": "SETIA Band Official",
        "content": "507286213",
        "extra_content": "_SETIA_BAND_"
      },
      {
        "object_name": "She Band",
        "content": "97181158",
        "extra_content": "She_Band"
      },
      {
        "object_name": "ten2five band",
        "content": "133700247",
        "extra_content": "ten2fiveband"
      },
      {
        "object_name": "TANGGAMUSIC",
        "content": "59726578",
        "extra_content": "TanggaMusic"
      },
      {
        "object_name": "The Virgin Band",
        "content": "2589332478",
        "extra_content": "TheVirginRCM"
      },
      {
        "object_name": "Hijau Daun",
        "content": "74092691",
        "extra_content": "hijaudauntweet"
      },
      {
        "object_name": "LETTO Indonesia",
        "content": "17266890",
        "extra_content": "LettoBand"
      },
      {
        "object_name": "ŦҤẸ ÐẠ₦₡Ẹ ₡ØMPẠ₦¥",
        "content": "171890168",
        "extra_content": "tdc_band"
      },
      {
        "object_name": "The Rain",
        "content": "125902492",
        "extra_content": "TheRainBand"
      },
      {
        "object_name": "ZIGAZ #zigazwakeup",
        "content": "112419923",
        "extra_content": "ZIGAZrocks"
      },
      {
        "object_name": "Zivilia",
        "content": "127579010",
        "extra_content": "Zivilia"
      },
      {
        "object_name": "Safir Senduk",
        "content": "131044223",
        "extra_content": "SafirSenduk"
      },
      {
        "object_name": "Pakar Kartu Kredit",
        "content": "138223746",
        "extra_content": "RoyShakti"
      },
      {
        "object_name": "Ligwina Hananto",
        "content": "32456794",
        "extra_content": "mrshananto"
      },
      {
        "object_name": "Aidil Akbar Madjid",
        "content": "49536214",
        "extra_content": "AidilAKBAR"
      },
      {
        "object_name": "Financial Counselor",
        "content": "86258196",
        "extra_content": "FreddyPieloor"
      }
    ];
    var jsonsu = {};
    _.each(jsons, function(n,i){
      if(typeof(jsonsu[n.content]) === 'undefined'){
        jsonsu[n.content] = n;
      }
    });
    _.each(jsonsu, function(n,i){
      sql.push('(null,"'+ n.object_name + '","twitter","account","' + n.content + '","' + n.extra_content + '", @APPID, now())');
    });
    res.ok(sql.join(', '));
  },
  url: function(req,res){
    var raw = [];
    var coll = urls.split(',');
    _.each(coll, function(n,i){
      raw.push(parseUrl(n));
    });
    res.json({
      res: raw.join(',')
    })
  },
  fb: function(req, res){
    var arrIds = fbs.split(','),
      reduced = [],
      promises = [];

    _.each(arrIds, function(n,i){
      promises.push(new Promise(function(resolve, reject){
        setTimeout(function(){
          facebook.getUser(n)
            .then(function(resu){
              //var sql = '(null,"'+ resu.name + '","twitter","account","' + resu.id + '","' + resu.id + '",@APPID, now()), ';
              var sql = {
                object_name: resu.name,
                content: resu.id,
                extra_content: resu.id
              };
              console.log(JSON.stringify(sql)+',');
              resolve(resu);
            });
        }, i*4500);
      }));
    });

    //Promise.all(promises)
    //  .then(function(results){
    //    var require = _.map(results, function(n){
    //      return {
    //        object_name: n.name,
    //        content: n.id,
    //        extra_content: n.id
    //      }
    //    });
    //
    //  });

    res.ok('wait and look at log.');
  }
};
