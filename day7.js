const testString = '190: 10 19\n' + '3267: 81 40 27\n' + '83: 17 5\n' + '156: 15 6\n' + '7290: 6 8 6 15\n' + '161011: 16 10 13\n' + '192: 17 8 14\n' + '21037: 9 7 18 13\n' + '292: 11 6 16 20'

const convertStr = (arr) => arr
    .split('\n')
    .map(elemStr => elemStr.split(': '))
    .map(elArr => [+elArr[0], elArr[1].split(' ')]);

const testArray = convertStr(testString);

const str = '456255051: 518 367 3 35 39 7 8\n' + '1358: 592 80 529 74 83\n' + '1464: 241 1 2 1 6\n' + '46217848: 17 3 4 9 2 9 74 4 46 2 7 3\n' + '19284295257: 8 5 4 8 94 3 5 8 6 8 41 8\n' + '2864344343820: 2 864 344 34 3 820\n' + '10332050008487: 7 4 738 100 50 84 85\n' + '2385120: 9 7 7 4 53 593 98 6 88\n' + '160267179632: 2 2 707 6 6 8 2 9 4 98\n' + '248910: 2 4 62 9 6 613 3 779 3\n' + '8157996: 88 2 4 1 682 4 160 66 1\n' + '5936513: 60 6 3 8 16 513\n' + '38657204867701: 88 9 1 719 62 382 43 7\n' + '303520: 6 4 56 542\n' + '16025043: 65 7 22 80 430 20 443\n' + '1350199: 45 30 1 33 66\n' + '917148817: 908 5 1 63 251 881 4\n' + '150167017: 94 2 93 43 2 29 7 91\n' + '1350984: 7 2 7 9 2 4 9 6 3 7 1 4\n' + '560921240: 195 523 6 8 55\n' + '179146: 574 12 2 13 58\n' + '3738387: 722 59 5 348 879\n' + '955947: 19 28 79 72 2\n' + '750176: 750 17 3\n' + '12089985: 40 91 342 6 506 633\n' + '259637: 4 9 6 7 98 306 6 5 7 6 3 5\n' + '18583986: 53 728 37 5 643\n' + '451628800: 881 80 56 31 80 20 2 2\n' + '380: 1 3 137 50 2\n' + '696325: 7 199 2 499 1 219\n' + '1505880: 2 4 7 7 7 16 3 9 4 2 705\n' + '12900386275258: 971 5 5 70 12 948 2 60\n' + '68609835748: 7 2 7 7 2 7 567 3 6 7 4 82\n' + '217956977: 1 25 285 2 986 685 7 6\n' + '12611820: 17 48 4 7 46 6 822 962\n' + '59813742: 1 998 709 964 35\n' + '23391632163: 371 4 34 6 52 7 8 780\n' + '1106808968943: 131 44 63 8 24 1 8 9 43\n' + '7779981097: 739 44 2 5 55 57 87 9 1\n' + '24757202: 538 674 7 9 9 8 600 2\n' + '4276: 687 153 5 76\n' + '2262310: 5 209 4 67 5 98 8 5 920\n' + '13437365255: 26 7 4 822 56 216 441\n' + '816: 2 84 730\n' + '632987: 9 64 6 123 8\n' + '8686138: 5 4 91 80 4 4 1 4 81 57\n' + '5633335057545: 563 33 350 575 45\n' + '47301274261: 6 2 2 8 6 24 8 15 95 8\n' + '24102: 1 20 4 964 2\n' + '8520: 469 7 16 884 18\n' + '354960: 2 67 4 69 7 29 20\n' + '315861: 23 3 6 46 7 2 1 250 623\n' + '201675341: 1 629 4 9 4 4 7 120 2 2\n' + '764249: 2 8 148 6 86 8 35 2 524\n' + '177345118: 40 93 83 45 8 5 59 2\n' + '43240: 2 7 94 5 27 1 3 726 799\n' + '255: 52 10 92 95 6\n' + '16294630178: 34 75 4 72 326 1 7 7\n' + '29556: 7 93 308 26 930\n' + '424: 85 1 338\n' + '3147161: 659 4 3 6 57 2 3 33 743\n' + '6688618: 92 14 59 5 88 864 18\n' + '11084032: 2 5 8 2 3 5 5 35 6 8 160 4\n' + '3376334: 28 4 8 933 923 2\n' + '323186086: 359 9 331 529 85 1\n' + '50566: 56 9 99 65\n' + '99540: 48 40 70 6 105\n' + '24903492705: 41 6 90 3 890 7 7 3 35 3\n' + '7046: 5 4 7 3 23 7 57 365 2\n' + '2491: 1 7 2 169 8 1\n' + '360240862471: 95 948 21 16 40 4 68\n' + '192243: 62 613 441 5 8\n' + '395764: 201 740 4 193 62\n' + '4725864: 3 6 1 8 35 1 3 9 3 9 4 429\n' + '382897200: 209 6 2 9 746 79 30 35\n' + '3043656: 6 99 14 6 61\n' + '308044062: 669 621 40 46 1\n' + '440: 405 5 4 9 4 5 1 1 7\n' + '16531: 602 25 405 995 82\n' + '86467840: 5 9 9 99 3 9 7 8 172 172\n' + '327437: 48 6 273 424 7 6\n' + '4565690: 7 4 9 8 85 502\n' + '154630389: 2 333 1 153 46 9\n' + '23412: 1 7 28 5 4 81 885 4 4 3\n' + '827829: 122 389 6 6 5 9 9\n' + '8885430847: 98 727 18 5 844\n' + '2937357: 26 7 1 58 1 16 61\n' + '45221: 4 205 7 690 21 8\n' + '109593: 2 9 4 3 506 6 115 3 173\n' + '493558193: 9 219 6 85 491 73 10\n' + '562264580: 737 9 38 64 896 9 740\n' + '3786019: 8 6 440 9 3 1 23 1 691 4\n' + '24500680: 8 622 5 4 710\n' + '1494853: 5 90 79 38 2 6 4 3 3 7 3\n' + '6262721184: 857 1 83 4 720 73 8 1\n' + '11928: 9 6 34 88 893 8\n' + '40584295: 30 5 5 998 635 497 3 9\n' + '944: 2 26 799 87 30\n' + '514592568309: 45 19 6 4 3 947 83 7 2 9\n' + '841: 1 16 4 2 5 347 4 6 456\n' + '18119718: 64 156 82 50 36 918\n' + '326: 96 61 80 89\n' + '176581: 63 280 4 14 2\n' + '90: 8 15 3 6 2 13\n' + '80497800: 559 5 1 6 8 3 600\n' + '776296094112: 7 7 6 1 4 9 848 77 843 4\n' + '34341847618: 5 6 9 784 46 7 8 8 449 5\n' + '2972277: 4 95 38 30 2\n' + '29260: 8 908 4 204\n' + '37996226062: 8 581 8 4 68 3 5 2 2 57 6\n' + '196: 97 1 2\n' + '892366798: 7 4 4 9 50 213 5 8 325\n' + '17398856204: 166 7 988 561 95 9\n' + '3188308: 23 26 3 50 53 355\n' + '288995104: 288 925 3 67 103\n' + '230961: 4 45 50 99 702\n' + '1021272: 7 4 23 12 6\n' + '7269309354: 3 6 4 1 29 8 9 3 631 51 4\n' + '11827084251: 41 56 874 8 746 5 5 3\n' + '6507345449: 8 37 7 1 51 151 422 24\n' + '5046271: 523 6 825 6 2 858 59 5\n' + '1405550: 8 6 3 9 1 618 4 3 92 5 2\n' + '7388707: 200 78 368\n' + '69109: 657 54 24 4 844 9\n' + '213767278647: 6 4 832 6 6 1 9 94 956 7\n' + '556260: 4 375 40 703 444 60 1\n' + '909617: 2 9 2 8 7 257 95 8 1 4 4\n' + '4180: 4 321 93 10\n' + '5099940000: 46 7 5 8 376 7 2 3 87 4 4\n' + '58251180: 36 185 701 376 884\n' + '1220428: 922 5 6 9 7 61 44\n' + '1155083: 30 174 64 862 5\n' + '47893077243: 48 376 8 4 53 4 99\n' + '308653670146: 695 494 899 142 1\n' + '2267786442: 163 62 3 748 42\n' + '18682085655: 52 19 36 5 6 9 3 7 2 655\n' + '1031276143: 70 4 1 367 61 4 4\n' + '23652: 7 62 54 169 36\n' + '1104448963: 546 6 2 24 1 5 32 9 2 3 1\n' + '12127367761: 18 949 64 7 764\n' + '12037360: 2 9 56 256 4 85 212 1 2\n' + '35163: 298 5 522 1 94\n' + '4576: 2 3 91 2 6\n' + '79888879: 93 9 3 45 2 707\n' + '250097091: 600 459 328 7 6 907 4\n' + '978: 6 4 97 8 1\n' + '59717: 1 40 5 75 3 164 7 59 68\n' + '6386: 6 1 1 4 217 6 32 14 258\n' + '36412416611: 229 92 4 4 432 610\n' + '615627: 8 20 9 8 7 453\n' + '1914036530004: 8 390 7 569 7 6 6 2 5 8 4\n' + '1721528: 3 985 6 72 9\n' + '88222: 37 4 2 584 618 4\n' + '579978092: 827 1 9 2 48 3 289 7 91\n' + '4280690848: 9 772 774 796 241 15\n' + '658025552: 13 618 5 819 2\n' + '305199: 7 1 3 6 12 3 1 44 2 2 8 2\n' + '152: 6 83 4 1 4 54\n' + '3761211: 2 1 45 8 1 21 4 1\n' + '117216864: 5 1 8 8 3 88 4 49 6 618 4\n' + '24921660: 4 7 69 649 4 5 24 57 3 1\n' + '851337587: 8 419 81 1 2 2 9 3 75 87\n' + '1450: 99 636 597 112 7\n' + '67786671: 1 9 937 34 8 74\n' + '353572: 37 953 1 188 773\n' + '7200: 9 24 7 652 80\n' + '15008369: 4 670 80 5 3 7\n' + '19981925: 5 46 39 6 9 12 4 6 3 6 25\n' + '499865729: 892 8 4 45 390 7\n' + '173472314152: 6 9 127 9 72 34 4 983\n' + '334738: 4 818 4 749 8\n' + '67671: 7 975 691 3 9\n' + '9236: 6 1 326 27 4\n' + '591360: 3 44 286 596 746 40\n' + '57570403954: 87 6 83 5 6 4 10 3 1 9 5 1\n' + '1731: 1 88 142 891 610\n' + '59449925205782: 688 9 7 8 4 3 520 5 78 2\n' + '930837472: 590 959 844 8 89\n' + '124037168: 4 2 5 2 634 8 3 6 737 6 8\n' + '384111258: 9 445 59 478 3 3 6\n' + '1034510: 95 12 997 937 4 58\n' + '2612042076825: 24 3 355 7 362 95 38 6\n' + '289084: 275 2 44 2 9 4\n' + '2576957436: 4 2 520 8 690 57 1 3 3 6\n' + '64184434: 3 65 50 43 6 439\n' + '55403829345: 66 1 93 90 31 93 48\n' + '1799: 1 1 142 57 182\n' + '74638330: 746 383 31\n' + '187977159: 187 6 3 77 159\n' + '3729930: 560 5 6 11 8 36 91\n' + '47340: 3 6 992 51 45\n' + '13489: 61 3 7 63 89\n' + '8491: 3 475 697 4\n' + '52497: 1 7 7 8 66 8 99 6 801 9\n' + '7729848: 9 62 721 151 7\n' + '10862613765: 47 9 8 3 8 1 16 668 8 4 7\n' + '374865: 7 7 1 9 240 3 55 17 67\n' + '32113: 8 40 67 46\n' + '2726778711: 8 446 211 3 249 6 710\n' + '229991628951: 28 87 352 944 6 7 8 77\n' + '5557822519: 136 87 233 96 7 3 823\n' + '511345300161: 97 573 92 99 3 29 832\n' + '532080: 54 1 17 5 9 5 8 8 1 95 16\n' + '1508: 3 78 40 422 76 881 8\n' + '28314048: 90 8 46 1 5 1 22 8 336\n' + '49291: 7 7 25 2 39\n' + '1941: 1 2 963 6 9\n' + '1743218: 1 1 4 3 6 943 994 1 76 7\n' + '2962993955: 196 430 6 9 1 18 217 5\n' + '13245: 4 8 75 16 702 4 221\n' + '11061855980: 1 3 20 5 6 9 4 8 8 1 9 719\n' + '48426376: 654 41 2 903 292 1\n' + '38480455983: 16 5 7 7 4 3 6 1 73 94\n' + '29073524328: 50 8 894 59 6 8 7 4 32 8\n' + '29066: 5 9 2 1 31 5 2 24 5 1 686\n' + '85708288512: 9 249 7 9 1 1 7 657 44 3\n' + '9147996: 8 46 6 7 990 9 2 7 22\n' + '6860406059860: 7 1 1 8 4 4 816 3 190 94\n' + '26728316645: 9 54 4 4 9 55 9 7 6 64 7 1\n' + '601: 54 4 5 16\n' + '2581247435: 9 74 989 387 5\n' + '1466942400: 8 4 7 69 99 4 7 7 70 10\n' + '33785752: 6 184 8 81 4 9 8 7 29 8 7\n' + '18711: 9 3 6 5 2 47 8 8 1 5 29 6\n' + '53066393: 23 29 93 245 129 1\n' + '21426171: 214 26 169\n' + '215821397: 74 710 136 7 88 11 23\n' + '2599: 6 324 9 37 609\n' + '466779: 4 411 254 4 9 8 4 1 58 4\n' + '2721564604053: 388 7 3 6 4 8 1 4 3 436 7\n' + '131219302: 88 43 218 456 848\n' + '3327530: 4 74 6 9 2 2 831 54 393\n' + '21974748: 35 5 9 109 35 16 2 346\n' + '236472192: 177 6 2 35 82 9 2 88 2 2\n' + '143012280: 768 1 95 5 7 1 7 6 2 7 8 5\n' + '1865946: 1 44 26 8 7 8 5 908 3 6\n' + '875: 1 77 319 8 470\n' + '94486: 55 108 3 1 8 13 8 7\n' + '1426: 3 9 522 85 791\n' + '33027581: 834 9 2 440 300\n' + '70991: 7 1 7 591 6 8 8 1 3 4 7 1\n' + '281328222198: 790 179 537 4 663\n' + '60207257297: 5 881 185 697 527 7\n' + '298650507: 5 3 3 4 992 112 9 9 6 1 5\n' + '38478: 7 377 1 6 8\n' + '380186: 290 228 9 16 7 83 3\n' + '1410: 14 1 94\n' + '30700: 340 9 9 3 7\n' + '1838592: 3 4 2 798 96\n' + '1453652: 2 4 77 6 527 182 330\n' + '3476499608: 8 8 8 679 25 5 2 4 932 5\n' + '15576616: 11 4 711 7 991 71 5 2\n' + '3335051540: 736 8 41 15 921 8 5 4 3\n' + '11469: 2 7 39 21 3\n' + '25197991: 6 565 3 79 2 6 94 8 813\n' + '195450814: 7 4 2 4 5 66 716 188\n' + '1166011375757: 5 89 4 2 892 654 7 75 7\n' + '13264798: 3 8 653 3 1 5 82 6 647 4\n' + '9204: 9 40 81 626 7 2\n' + '1036340: 356 5 410 7 3 5 249 8 5\n' + '4086051198: 1 6 569 14 275 896\n' + '12163644953: 348 61 573 95 4\n' + '73273670: 9 4 6 4 94 4 8 4 829 4 7 6\n' + '6248965: 6 242 58 2 9 5 543 79 6\n' + '807046: 5 89 9 1 7 1 798 61 49\n' + '211056: 5 9 3 6 7 3 9 973 3 2 62 8\n' + '431554: 7 2 2 7 34 6 7 80 8 9 825\n' + '1250700: 7 78 4 2 3 379\n' + '1923946830: 432 3 60 7 5 2 7 5 585 9\n' + '64432650: 43 601 3 26 49\n' + '1683201226: 29 139 320 12 26\n' + '6563233151: 13 5 31 735 98 42 16\n' + '960: 7 4 22 678 36 10 178 8\n' + '433812926233: 71 611 2 926 231\n' + '1269248686: 9 1 57 64 67 19 14 9 2 5\n' + '1231154400953: 6 482 4 2 33 8 7 76 953\n' + '13112635: 967 7 6 2 7 6 8 4 7 569\n' + '22322: 6 5 742 5 57\n' + '8934: 915 96 95 8 86\n' + '19823695: 825 987 24 7 1\n' + '50114788: 4 7 5 69 2 4 2 4 383 94 4\n' + '9686880: 7 4 60 961 6\n' + '10145903457: 446 3 92 88 4 1 451 5\n' + '1634279: 81 7 136 2 7\n' + '24039018: 2 40 1 1 3 6 50 1 9 6\n' + '14686409835: 40 137 268 983 7\n' + '851318: 34 7 613 320\n' + '464953: 8 83 15 7 7 1\n' + '847776: 3 623 93 6 3 8 24\n' + '5268: 4 801 467\n' + '22204: 7 4 8 9 5 4 4 22 5 1 328 7\n' + '609392647264: 4 498 478 64 72 67\n' + '25724411: 3 3 1 40 44 58 6 6 6 32 3\n' + '45653442: 3 25 8 1 55 2 7 93 8 643\n' + '924143: 12 3 8 431 579 9 7 6 6\n' + '10492512: 1 82 9 11 81 16 7 4 2 2 4\n' + '3135010539: 3 74 4 5 44 6 104 52 87\n' + '103853614581: 28 848 3 4 2 78 80 2 2 6\n' + '152960: 54 81 8 5 4 8 49 28 52 1\n' + '170908: 7 6 693 4 139\n' + '94851653: 10 630 5 38 3 574 3 5 5\n' + '9771585: 780 3 6 59 7 33 326 3\n' + '1031201: 945 6 3 2 5 2 94 6 6 7 5 5\n' + '902269026755: 8 6 3 3 3 3 78 1 7 6 6 754\n' + '24854085118: 899 19 8 659 6 5 46 56\n' + '1125: 2 62 9 9\n' + '40437: 37 330 56 292 7 56 5\n' + '80280: 4 2 3 798 9 1 57 10 90\n' + '13306: 9 7 1 9 253 9 8 5 2 9 4 9\n' + '4107: 15 244 5 2 72 3\n' + '132266951460: 7 6 9 6 9 8 3 43 3 252 35\n' + '23713064: 10 975 64 28 38\n' + '23954: 1 89 269 4 9\n' + '21547275: 24 9 235 804 77\n' + '743479: 296 86 27 72 871\n' + '1076265: 820 256 163 4 92 6\n' + '2471580: 54 636 2 597 3\n' + '984: 4 7 1 613 92\n' + '281872224: 1 387 216 4 843\n' + '1223455498: 7 658 2 1 9 59 6 92 5 4 8\n' + '11967: 7 4 354 95 3\n' + '8351173: 2 834 5 9 794 728 650\n' + '1428: 3 2 18 60 48\n' + '3880304: 871 5 891\n' + '832577236: 83 2 577 23 6\n' + '335580: 1 2 32 67 94 5 7\n' + '7843: 1 77 3 1 6\n' + '283803: 3 785 6 1 3 5 6 6 4 88 3 8\n' + '394317856: 468 20 8 619 1 68\n' + '154498002: 772 49 200 4 1\n' + '107996490: 4 73 4 9 91 5 9 9 90 7 3\n' + '806784: 9 7 5 67 87\n' + '833986115930: 5 7 5 2 1 7 6 598 88 81 2\n' + '969492: 5 9 643 9 9 1 1 6 76 26 4\n' + '61045271: 609 82 63 27 1\n' + '1352800050: 9 6 1 4 4 22 712 38 1 50\n' + '1404838169: 62 37 9 61 774 43 2\n' + '1892337076: 84 125 8 605 33 868 7\n' + '2687730: 7 328 9 1 3 8 6 6 8 397 9\n' + '41747440: 146 418 74 11 440\n' + '610412792: 763 8 1 279 3\n' + '463242290642: 2 75 200 7 3 14 53 22 2\n' + '3232975469184: 57 6 23 162 64 41 93\n' + '4967323: 7 862 36 355 157\n' + '59404830491: 3 990 15 5 4 152 20 9 1\n' + '1781681: 30 7 6 71 80\n' + '1709184: 2 21 6 4 4 21 8 3 9 2 7 2\n' + '14107: 2 93 3 114 3 46 31\n' + '4214566: 7 6 145 65 2\n' + '76372894183: 4 67 38 7 72 894 183\n' + '4137587807: 7 9 2 9 8 4 5 5 1 756 1 5\n' + '82602: 810 9 6 50 52\n' + '606131748: 50 94 9 4 398 4 4 9\n' + '14539536: 1 916 9 6 264\n' + '3510269675: 108 180 56 5 498 2 18\n' + '117415: 61 8 543 7 6 1 6\n' + '141462: 4 73 790 469 75 87\n' + '2696458941: 625 2 724 4 3 55 869 9\n' + '355806: 7 9 1 3 8 8 8 327 7 7 1 2\n' + '2235153: 5 4 489 27 41\n' + '1920364: 3 836 5 23 65\n' + '758: 317 3 91 96 251\n' + '469966: 6 4 49 7 464 5 6 1 2 9 85\n' + '6407635: 4 2 4 3 3 80 2 8 427 9 8 5\n' + '2957248902: 704 2 3 6 2 80 1 7 930 5\n' + '9085218357: 9 8 3 2 7 78 5 218 356 3\n' + '122644544: 19 5 6 839 57 761 608\n' + '124921396767: 3 66 274 750 2 881 5\n' + '116590449: 705 745 13 201 4\n' + '164: 67 38 1 49 9\n' + '3971449: 656 3 2 2 30 528 912 8\n' + '107102202760: 823 29 241 51 38 490\n' + '8547073050: 55 5 8 91 10 3 7 30 51\n' + '20729928: 8 3 16 56 964 69\n' + '5036922328: 1 57 5 9 709 4 6 331 73\n' + '301186517473: 695 503 1 9 62 8 193\n' + '1110506: 81 9 36 183 5 6 42 9 7 5\n' + '27718569720: 69 29 50 9 5 4 9 686 34\n' + '164024: 1 9 565 4 8 96 59 8\n' + '1123508: 51 22 1 507\n' + '44133: 1 3 7 939\n' + '467305812: 975 2 331 724 11\n' + '684746708: 62 7 954 962 33 5 4 4\n' + '3939: 5 8 1 3 3\n' + '1669: 86 308 427 848\n' + '534259408: 32 14 79 413 147 694\n' + '601895: 175 618 11 69 2 6\n' + '93044248: 6 35 6 2 1 438 85 3 75 5\n' + '30523069: 49 2 417 66 898 49\n' + '87025301: 54 39 8 649 2\n' + '6978753103559: 55 3 82 81 5 9 74 6 2 38\n' + '77432: 1 5 5 9 86 8 4\n' + '48801037: 30 44 6 16 162 875\n' + '3547642: 1 902 57 69 76\n' + '8418127: 84 181 27\n' + '244771521695: 24 5 996 51 816 95\n' + '655156765796: 649 6 15 67 3 3 5 79 1 4\n' + '11826727: 7 927 17 4 2 6 1 3 43 8 7\n' + '2354: 3 3 2 8 6 1 6 9 7 7 7 2\n' + '38186196: 6 706 61 630 90 6\n' + '120374958: 218 6 23 4 5 57 4 3 674\n' + '13873999652: 79 8 94 7 13 665 7 3 5\n' + '8589: 5 99 215 45 2\n' + '33950: 70 5 97\n' + '3014230: 53 7 2 13 86 8 56 1 8 86\n' + '291773516035: 5 93 243 59 3 474 427\n' + '2519578: 97 282 193 63 44 4\n' + '9440: 6 8 281 8 4\n' + '35209865077: 57 1 954 1 7 925 7\n' + '2684592: 6 10 7 69 8 2 927\n' + '53612: 306 35 5 62 1\n' + '177168: 103 1 21 17 13\n' + '103741450488: 9 1 4 12 6 5 2 4 58 51 6 6\n' + '7242: 603 3 4 5\n' + '5927785464: 692 143 39 497 1 599\n' + '41053685: 5 13 2 33 3 6 4 221 119\n' + '47814833400: 488 71 43 460 30\n' + '944: 18 2 13 4 472\n' + '4922292891: 1 2 1 921 87 37 5 289 1\n' + '135386240: 1 1 8 77 6 73 494 8 44\n' + '1414885: 595 283 1 4 248 4 3\n' + '8281811305987: 828 18 11 305 988\n' + '849709: 36 40 590 13 9 87\n' + '80295814: 7 72 3 9 95 7 27 84\n' + '11641132: 5 370 37 839 7\n' + '62159: 2 59 4 6 2\n' + '8884827: 4 38 4 9 80 7 2 8 8 2 169\n' + '487151: 19 6 642 9 1 1 81 827\n' + '19792400: 365 9 882 3 3 4 3 20\n' + '3732558: 8 1 5 9 4 18 24 9 2 4 4 3\n' + '62566: 5 8 8 595 686\n' + '121076: 23 2 97 1 6 7 93 9 59 8\n' + '412997258: 6 998 726 51 95 53\n' + '15863: 141 92 97 45 132 881\n' + '1669: 698 56 1 241 460 214\n' + '399609932: 91 24 687 908 8 987 5\n' + '57271: 6 2 530 9 29\n' + '12462895: 1 1 7 52 5 1 7 85 851\n' + '2031879915: 8 19 9 3 72 5 28 87 45\n' + '21881972: 145 878 93 23 5\n' + '267421: 297 9 96 21 4\n' + '2365: 2 828 66 638 5\n' + '22423836: 31 64 69 57 4 1 7 909 6\n' + '56798244585: 4 7 33 18 1 4 2 6 2 9 2 5\n' + '161069: 9 60 61 268 1\n' + '968662: 47 896 475 61 2 2 2\n' + '8677023: 344 36 9 76 92 7 739 8\n' + '90765025: 237 71 29 1 186\n' + '28924: 4 7 185 9 730\n' + '41009190: 94 210 64 5 87\n' + '4239270: 733 320 865 7 83 9 2\n' + '18757440: 8 87 17 720 835 27\n' + '1214: 38 250 4 59 3\n' + '199905832: 3 17 97 1 164 581\n' + '14009445974791: 77 400 254 181 788 1\n' + '337075552: 896 5 15 38 33 9 79 4\n' + '267152117588239: 54 645 78 456 17 767\n' + '8087506: 46 3 11 137 4 7 15 286\n' + '557855: 78 142 81 50 8\n' + '52547: 1 6 502 5 7\n' + '3355129040: 6 5 4 378 2 9 42 2 6 4 3 7\n' + '1827: 6 914 2 900 6\n' + '16565641: 7 7 2 91 37 1\n' + '718928: 78 94 4 98\n' + '182113: 522 251 488 78 4 34 9\n' + '4472314: 3 75 35 77 514\n' + '13703287920: 754 35 1 7 618 92 840\n' + '613000: 464 650 11 6 50\n' + '2087940: 84 537 1 8 274 46\n' + '956480: 6 59 73 448 5\n' + '1680: 12 84 556 67 49\n' + '1681: 777 82 251 568\n' + '25758: 1 16 8 454 301\n' + '699656: 6 2 8 613 4 7 5 6 58 7 1 8\n' + '5886: 8 2 90 554 9\n' + '113433: 4 95 9 745 33\n' + '400343320: 97 7 49 97 1 82 260\n' + '4190023563264: 344 967 852 88 28 6\n' + '210952: 450 120 6 970 2 3 29 8\n' + '37584: 1 4 4 1 7 8 9 3 483 1 27\n' + '487656: 4 2 265 2 7 870 6 5 4 6 4\n' + '19477: 269 70 642 2 1\n' + '33823150894: 61 19 707 453 598\n' + '15192775: 2 192 45 87 4 4 2 509 5\n' + '24170975: 82 89 9 8 46\n' + '10451851200: 572 18 4 843 3 5 2 70\n' + '2016647131: 9 4 2 57 8 67 1 4 3 9 653\n' + '85771761: 1 7 6 52 2 86 9 59 7 6 1\n' + '333063679880: 5 7 8 1 65 9 4 78 1 882\n' + '50036319: 4 9 3 1 2 63 8 631 9\n' + '12848063116: 941 2 5 21 65 14 605\n' + '775300626: 39 199 469 213 9\n' + '140284030260: 64 6 5 7 4 4 2 5 2 6 5 260\n' + '472899552: 1 7 120 2 733 4 277 96\n' + '52781656129: 5 693 1 7 84 2 9 2 46 6 5\n' + '4052622: 321 2 343 28 4 62 3\n' + '11074805: 3 8 3 13 8 91 3 4 71 9 6 1\n' + '502046: 2 9 5 46 214\n' + '22145: 42 48 92 8 98 5\n' + '641176: 5 10 1 37 33 217 3 7 7\n' + '12987: 5 7 58 67 149 42 9\n' + '38577568708: 308 3 1 773 7 568 70 8\n' + '8197202: 10 1 2 6 471 7 5 9 69 2\n' + '2257: 4 959 957 3 334\n' + '16941659137: 7 7 218 10 700 9 793\n' + '99199237760: 2 4 7 9 980 42 2 50 40 4\n' + '23647488: 758 95 86 82 4\n' + '192486171: 6 416 6 9 5 9 8 5 56 6 5\n' + '5549544: 210 19 888 521 77 44\n' + '153550559: 961 226 7 101 57\n' + '12760357: 102 7 4 5 7 621 590 80\n' + '82146: 22 928 3 86 4 9 4 77 92\n' + '97081400: 47 66 489 8 77 74 8\n' + '96867: 968 6 9\n' + '7556760500: 9 9 613 700 1 644 9 7\n' + '3690: 39 121 152 426 5\n' + '25054184: 9 77 43 5 885 584\n' + '9054: 53 80 7 280 2\n' + '1753176: 454 6 76 624 512 88\n' + '5566179: 55 66 1 149 32\n' + '2437: 2 3 7 2 46 6 5 8 9 7 253\n' + '2152448623: 76 120 5 45 236\n' + '446584320: 48 6 197 9 42 9 2 8 284\n' + '5026560572: 704 7 340 1 3 5 2 60 3 2\n' + '401715567433: 196 9 5 961 8 79 408\n' + '126727: 79 9 5 32 9 7\n' + '4693752014: 8 6 7 7 6 3 60 6 536 5 2 7\n' + '1158430936230: 6 6 7 60 857 4 5 9 894 5\n' + '17064: 79 367 6 89 7 5 67 6\n' + '151704820: 80 3 8 7 9 63 7 2 9 2 10\n' + '69191351: 211 595 21 8 551 77\n' + '187294553372: 673 721 349 66 278 4\n' + '5469: 21 526 2\n' + '284749818: 498 567 7 1 83 8 1 4 4\n' + '6560: 9 726 6 9 8 3\n' + '6320414: 9 117 401 6 8\n' + '8455: 8 3 3 5 99 6 4 4 2 9 7 13\n' + '83502: 2 4 1 33 5 2 56 7 2 396\n' + '18211050: 96 554 33 849\n' + '600030: 4 6 10 1 25 28\n' + '5574: 2 7 31 9 2 5 63 2 2 912\n' + '117570: 8 79 294 97 93 73 7\n' + '1435808: 28 5 4 6 3 2 1 28 8 7 4 88\n' + '2235513514: 107 638 3 4 6 5 3 511 6\n' + '134149: 24 9 621 6 7\n' + '5089027: 583 3 18 2 3 5 96 67\n' + '25480: 63 1 822 9 7 6 4 7 50 5 1\n' + '253995432: 8 58 70 2 1 782 268\n' + '6183635: 206 12 1 3 6\n' + '17028642961: 8 56 9 2 866 20 306 7 1\n' + '36274135: 66 3 9 7 8 759 1 4\n' + '247163: 82 38 5 3 9\n' + '187369499: 386 3 8 6 98 4 2 40 9 6 5\n' + '1630011766: 9 1 6 320 7 6 67 5 48 7 3\n' + '74616876: 829 45 153 558 1\n' + '111520: 6 60 36 55 524 5\n' + '15922138: 38 60 9 8 5 596 3\n' + '429242490: 8 23 2 96 48 3 3 9 9 855\n' + '301812450: 88 43 80 997 610\n' + '2432646: 8 3 25 7 647\n' + '2881929961: 890 4 23 6 12 60 6 871\n' + '164667591: 106 4 401 4 97\n' + '23648926321: 2 627 65 842 6 90\n' + '4917671500: 702 505 19 500 7\n' + '821381790: 506 7 533 342 6 435\n' + '587: 56 9 18\n' + '21657837: 6 125 67 431 87\n' + '118209146: 7 2 90 4 9 4 5 6 1 651 4 6\n' + '18729101: 83 3 5 737 1 5 7 2 3 592\n' + '2415: 85 4 5 1 7\n' + '3328: 792 865 8 933 730\n' + '1785032: 178 50 2 3 9\n' + '550289293: 5 4 547 97 7 289 3 293\n' + '348926: 34 3 4 7 545 3\n' + '1368088: 5 43 13 1 6 271 9 2 2 4\n' + '37573728: 7 4 984 91 51 4 8 88 2\n' + '6504: 48 126 329 57 70\n' + '7916631277121: 22 769 663 127 712 2\n' + '124699449675: 791 4 8 33 796 5 5 3\n' + '1268851212: 37 126 4 2 986 248 69\n' + '394632: 8 43 123 378 6\n' + '165517: 65 95 5 133 382\n' + '4412826: 1 67 2 64 391 57\n' + '364: 6 2 2 99 5 2 2 1 33 3 88\n' + '7185235: 7 8 479 2 35\n' + '8143877: 9 475 3 635 3\n' + '218489: 3 49 42 8 6\n' + '56534787: 604 4 9 65 8 69 4 1 78 4\n' + '2333602: 6 486 1 9 80\n' + '268065: 970 8 57 259\n' + '26152630: 74 44 28 10 8 35\n' + '18868: 1 8 1 3 59 588 7 9 2 1 9 4\n' + '354: 5 5 72 95 2\n' + '37500199148385: 799 5 7 6 1 807 469 83\n' + '34258245: 87 5 924 403 21\n' + '10893910: 9 4 3 93 910\n' + '10731604752: 182 396 8 20 33 564\n' + '254279: 96 6 826 274 7\n' + '562320: 7 2 5 7 7 24 9 1 2 3 2 781\n' + '356613888: 8 1 6 6 107 7 46 6 4 38\n' + '4688651850: 652 58 255 29 893\n' + '776396: 9 75 99 2 396\n' + '113504: 2 66 9 8 6 4 4 5 2 8 9\n' + '388375285: 992 4 340 170 171 8 6\n' + '11901276: 4 2 9 3 4 4 3 6 410 9 789\n' + '3466422: 34 57 9 423 1\n' + '245362322: 7 8 4 829 209 56 5 547\n' + '60450: 5 313 5 2 186\n' + '48664: 812 46 3 8 56\n' + '1159256: 443 95 2 309 897 508\n' + '201: 8 16 1 8 8\n' + '1369123739: 59 3 5 874 1 75 93 98 9\n' + '105786268: 119 48 463 7 4\n' + '106468: 98 75 190 578 1 9 22\n' + '26961274921: 7 2 935 83 186 6 7 8 5\n' + '123745021: 7 2 8 88 8 572 8 6 4 21 3\n' + '797: 534 20 80 154 9\n' + '20668: 5 84 49 42 46\n' + '125088488: 306 944 88 391 9 91\n' + '4718841: 523 56 9 61 568 3 509\n' + '1211: 5 9 7 13 4 6 4 443 4 5 69\n' + '672361: 9 880 6 2 9 7 4 4 2 9 1\n' + '2011012: 105 3 7 6 6 7 2 684 13 4\n' + '12504019: 31 22 8 9 551 3 934 86\n' + '746216: 6 1 67 53 9 7 1 3 202 2 8\n' + '5832: 1 3 9 1 7 605 9\n' + '383942685: 365 69 91 70 1 31 4 7\n' + '1354931: 2 711 641 9 31\n' + '17377021: 4 6 3 2 4 5 850 73 4 1 9 4\n' + '157: 1 6 9 9 4\n' + '3923576: 8 3 495 863 622\n' + '4596480007: 9 5 57 9 40 3 84 570 7\n' + '637647: 65 8 250 7 483 4 1 86\n' + '199: 9 8 2\n' + '59053673: 5 81 1 8 3 1 33 43 7 859\n' + '522375: 935 4 3 7 6 72 6 5 6 6 4 5\n' + '175568472868: 1 3 9 15 684 7 2 8 3 3 7 2\n' + '11184248: 89 97 390 6 5 6 6 5 7 1 9\n' + '8437208: 6 3 2 7 8 3 7 3 868 9 31 8\n' + '2663730: 3 795 80 8 3 9 23 2 5 9\n' + '1649824500: 1 97 986 375 46\n' + '392127376406: 870 939 3 6 104 8 409\n' + '11124610: 7 94 4 98 430 1 9 22 1\n' + '18728: 52 60 74 4 41 3 5 16 8\n' + '760977: 28 171 26 7 7 3 8 391\n' + '2012: 7 2 7 1 3 85 293 10 9\n' + '28791: 6 1 47 4 8 1\n' + '990086: 99 500 1 2 77 8\n' + '887700: 8 2 160 930 807\n' + '29896: 8 30 62 1 99\n' + '4343534: 4 716 3 516 406 6\n' + '241771987: 578 195 761 411 4\n' + '3525336: 390 55 224 9 785 1 18\n' + '11268756: 6 45 720 9 97 9 34\n' + '142688568091: 600 4 9 10 2 7 66 8 5 92\n' + '64962: 680 3 5 7 538 67 10 5 6\n' + '193748466: 9 545 79 5 98 868\n' + '31000: 67 66 3 7 25\n' + '3715: 2 1 5 325 7 4 3 49 185 3\n' + '1376194248033: 3 9 36 53 7 20 949 34\n' + '91417416069: 2 1 3 767 6 6 25 8 634 1\n' + '131347968738: 9 77 598 104 8 4 123 6\n' + '1032233: 755 276 1 2 32\n' + '657072: 4 8 35 7 29 12 78 3 1 6\n' + '921008618: 597 94 22 746 2\n' + '12464362: 718 64 77 207 64\n' + '758176008672: 6 2 725 172 76 866 9\n' + '1410144: 41 714 32 7 111 16\n' + '19894957637: 9 3 6 1 3 1 80 8 55 1 72 6\n' + '6765983850: 80 1 73 99 94 7 171 7\n' + '3192758: 7 1 842 223 2 330 9 8\n' + '3342672765: 3 3 3 8 89 966 9 75 6 5 9\n' + '2250140479200: 7 2 20 413 6 85 8 800 9\n' + '52140: 50 8 96 348 898\n' + '1576584: 42 75 94 54 9\n' + '82393920: 1 2 7 49 9 4 9 1 4 4 420 3\n' + '12731312: 9 3 714 7 178 987\n' + '3312: 8 1 403 3 8\n' + '163379: 45 6 9 8 35 8 809 27 32\n' + '115618018410: 4 9 6 8 7 37 1 4 230 8 9 3\n' + '80522741: 6 5 4 183 2 67\n' + '81303666447: 214 6 5 3 8 1 2 789 1 5 6\n' + '404906727457: 3 6 151 1 907 604 3 88\n' + '145327322: 59 6 5 698 2 7 27 2 841\n' + '4848: 1 232 7 639 75 5 78\n' + '5996877: 8 748 8 4 877\n' + '3728736: 3 358 852 484 4\n' + '283166: 1 3 8 7 356 884 11 4 92\n' + '16811226: 26 882 3 77 87 6 6\n' + '159942: 19 1 6 23 61\n' + '14135507: 3 240 6 80 425 7\n' + '30281637: 5 5 228 66 604 12\n' + '36103829328: 26 52 27 7 28 6 6 981\n' + '25547700144: 2 1 79 7 7 3 8 625 6 6 4 1\n' + '685510: 2 3 7 524 511\n' + '146967016: 650 646 25 127 9 8 14\n' + '1640262: 377 5 855 26 51\n' + '397304960: 138 7 7 45 212 136 13\n' + '175: 45 2 8 8 69\n' + '9467941: 8 9 252 2 1 8 92 6 2 1 36\n' + '1529041: 7 60 4 2 3 2 1 90 489\n' + '1749360: 5 19 26 82 89 358 592\n' + '600723120: 213 4 898 552 15 976\n' + '106270: 9 6 1 8 7 3 5 4 148 8 59\n' + '27144392540: 690 697 393 4 39\n' + '952: 8 1 1 2 17 923\n' + '2149: 4 40 63 43 3 2 29 6 7 1 6\n' + '5474: 5 6 57 4 846\n' + '12140374: 183 94 5 66 5\n' + '7344088670: 5 4 4 4 24 4 3 20 88 672\n' + '772605010: 97 5 236 1 90 15 5 6 4\n' + '3310671: 5 476 332 2 57\n' + '946962: 2 7 1 4 9 8 730 2 80 800\n' + '25969290: 345 98 8 3 32 909 65 3\n' + '6951: 493 8 152 1 228 192\n' + '184470223: 5 20 645 4 55\n' + '173494140: 5 1 34 940 1 41\n' + '8916824333: 887 1 5 40 824 333\n' + '850988: 4 7 407 4 9 8 7 7 1 5 5 4\n' + '3182362: 879 79 404 16 36\n' + '74473920: 36 907 12 3 760\n' + '273500946: 546 1 500 94 9\n' + '565021303992: 73 3 645 4 80 50 399 2\n' + '127627: 6 381 2 10 1 5\n' + '1767663719: 453 7 311 1 7 2 19 364\n' + '1320770: 4 3 9 6 4 3 35 1 502 8\n' + '3901: 56 82 251 3 8\n' + '1361261750: 54 82 126 17 49\n' + '244167: 50 37 48 90 94 56 7\n' + '668992: 47 677 3 62 8 40 7 9 14\n' + '2068228: 341 693 1 1 2 28\n' + '1876: 3 83 90 4 1 77\n' + '5154061802: 82 61 35 4 1 736 6 258\n' + '3347068088: 813 9 46 7 62 707 637\n' + '5268433453958: 2 952 9 85 97 9 72 1 36\n' + '167160245: 18 572 8 5 6 9 3 3\n' + '17224731695: 2 5 9 9 35 63 417 45 9 5\n' + '1256776: 70 44 6 2 68\n' + '89001: 7 892 99\n' + '934228130: 9 4 6 5 2 3 90 9 1 2 81 28\n' + '225: 7 3 5 79 41\n' + '62035802: 4 1 56 887 734 1 27 5\n' + '1355: 1 52 44 7 2\n' + '260616674: 6 20 4 9 60 2 153 1 3 7\n' + '1283: 825 6 435 12 4\n' + '448: 43 5 7 6 2\n' + '35156663: 9 946 26 7 368 521\n' + '2062353506618: 355 474 249 233 8 18\n' + '1064874080: 614 5 2 9 7 41 47 2 390\n' + '208344: 66 97 1 4 317 386 6\n' + '144078054: 478 3 8 6 53 15 3 652 5\n' + '102565140: 4 772 38 63 1 5 2 1 4 3\n' + '85951269: 906 558 6 471 17\n' + '631673: 1 30 454 90 13\n' + '146689: 4 2 95 63 7 730 4 55 46\n' + '4022425: 419 96 2 2 6\n' + '13695088: 69 7 63 535 5 1 805 88\n' + '20563: 41 40 99 9 2 6 9 7 9 5 2\n' + '283956331309: 525 9 2 5 6 6 328 3 310\n' + '649901188: 32 32 990 11 8 6\n' + '60628: 537 93 2 58 46\n' + '12197334240: 80 4 913 2 92 7 18 852\n' + '33554: 334 96 57\n' + '47238991417381: 472 3 8 991 41 738 3\n' + '2514117266: 6 6 295 4 46 86 2 6 4 6\n' + '117001: 9 2 6 441 42 3 260 3 2 7\n' + '25859683358: 7 71 5 343 77 8 33 5 8\n' + '50183: 25 20 99 44 38\n' + '1239430501: 61 90 674 294 511 2\n' + '1312931999: 9 34 9 1 9 6 2 71 9 773 2\n' + '460839132: 85 374 2 3 2 621 804\n' + '40767461718: 40 7 674 61 708 8\n' + '18054: 54 5 17 6 3\n' + '1491376: 20 745 12 74 2 7 87 3\n' + '1005408: 6 4 33 3 49 43 465\n' + '62987: 3 6 931 67 9\n' + '1639051: 942 7 7 2 1 5 2 1 31 3 4 7\n' + '1802040630012: 89 509 6 947 28 6 42\n' + '147519: 4 89 30 81 7\n' + '5487490: 1 3 910 6 3 4 90\n' + '3165245: 5 98 5 172 9 6 6 11 1 4 8\n' + '273975: 3 2 69 82 8 288 8 23\n' + '709636032: 25 9 7 56 36 29 51\n' + '35684149248: 9 80 368 172 2 3 16 3 1\n' + '1348806: 448 6 2 1 1 61 8 5 6 1 4\n' + '10995264: 20 161 8 8 756\n' + '5755962: 611 1 45 209 1 9 93\n' + '10973887: 2 2 6 9 880 2 81 6 7\n' + '18138933: 6 7 1 553 8 7 8 5 277 9\n' + '32740: 305 53 9 2 392\n' + '1810009884916: 1 81 250 247 1 4 87 4 6\n' + '1193644800: 2 90 300 901 48\n' + '4903459: 9 8 473 3 4 33 5 8 1 1 8 3\n' + '6846: 1 9 2 4 5 6 3 5 12 80 4\n' + '13236: 23 184 3 26 515\n' + '1563: 965 35 6 8 9 472 2 64 2\n' + '2203502: 372 59 71 72 230\n' + '6178947: 615 2 89 45 5\n' + '1833: 443 4 41 16 4\n' + '6569: 724 48 8 75 318\n' + '6010154: 111 2 45 742 99 7\n' + '122756: 8 431 785 3 56\n' + '36014220: 98 6 886 282 129\n' + '125193695: 7 4 9 2 8 1 7 8 4 4 675 95\n' + '585: 5 4 3 1 14\n' + '181660: 17 4 92 47 2 53\n' + '6911059592: 448 990 54 355 89\n' + '29369: 897 500 21 20 9 3\n' + '7322420: 27 979 9 2 1 3 180 5 5 4\n' + '9459835: 45 24 4 8 99 867\n' + '4908202: 5 55 442 7 78 15 20\n' + '964221: 90 6 372 27\n' + '5630: 7 59 8 76 6\n' + '36005427: 4 1 9 786 5 6 9 22 9 823\n' + '144832968: 61 119 4 92 549 2 8 8\n' + '84296590325185: 436 254 5 3 412 5 469\n' + '60768: 6 1 4 933 126\n' + '491829: 3 1 2 615 792\n' + '919885: 47 699 4 7 1\n' + '2317372: 7 546 2 606 28\n' + '5038664400: 8 41 8 4 1 498 7 22 5 5\n' + '64847: 4 77 8 3 7\n' + '3390988: 3 4 239 344 9 64 2 2 6 8\n' + '2301867: 43 52 9 8 1 6 3 9 3 1 48 2\n' + '9555685: 6 8 9 78 1 2 9 413 2 4\n' + '980981: 8 5 96 1 1 6 1 9 68 8 6 8\n' + '2764801382: 98 61 97 596 8 294\n' + '6370: 5 8 72 493 2\n' + '260708556: 79 330 85 5 6\n' + '3165901200: 1 2 5 2 9 9 9 8 77 5 9 423\n' + '226662: 81 9 34 3 74\n' + '2296749: 1 95 509 3 47\n' + '14454: 4 38 95 5 9\n' + '79074: 306 11 66 23 1 137\n' + '1317050: 28 47 80 25 1\n' + '217839: 4 972 7 8 111\n' + '1316: 7 4 347 938\n' + '70133: 83 832 92 3 982\n' + '2270892: 4 872 3 6 2 6 2 8 15 4 3\n' + '722: 6 1 9 8 646 3 49\n' + '1003811: 72 4 4 307 356 283 8\n' + '59754872: 8 3 6 656 86 4 1 7 12 9 2\n' + '1743626194600: 93 894 787 619 3 9\n' + '3466832059625: 30 51 249 556 91 23\n' + '5049: 45 13 7 81 448\n' + '961569759: 96 156 9 735 24\n' + '9493568: 494 8 2 4 8 92 1 4 3 9 3 3\n' + '1927: 8 6 762 1 59 635 449 7\n' + '838882803: 743 95 8 786 1 419 6\n' + '38556750: 189 3 68 746 4'
const dataArray = convertStr(str);

const countTrueEquations = (twodarray) => {
    let countedTruly = 0;

    const combinations = (numArray) => {
        const combLength = numArray.length-1;
        const generateCombinations = (length, prefix = '', result = []) => {
            if (length === 0) {
                result.push(prefix);
                return result;
            }
            generateCombinations(length - 1, prefix + '+', result);
            generateCombinations(length - 1, prefix + '*', result);
            return result;
        }

        return generateCombinations(combLength)
    }
    const isTrueCombination = (numbers, operators, result) => {
        let numRes = 0;

        numbers.forEach((num, inx, arr) => {
            if (inx === 0) return;
            if (inx > 1) {
                numRes = eval(`${numRes}${operators[inx-1]}${num}`)
            } else numRes = eval(`${arr[0]}${operators[inx-1]}${num}`)
        })

        return numRes === result;
    }

    for (let i = 0; i < twodarray.length; i++) {
        const numResult = twodarray[i][0];
        const numArray = twodarray[i][1];
        const combinationsArray = combinations(numArray);

        for (let j = 0; j < combinationsArray.length; j++) {
            if (isTrueCombination(numArray, combinationsArray[j], numResult)) {
                countedTruly += numResult;
                break;
            }
        }
    }

    return countedTruly;
}

console.log(countTrueEquations(testArray))
console.log(countTrueEquations(dataArray))
