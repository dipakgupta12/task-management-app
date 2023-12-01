import imageNotFound from "./../assests/images/404.png";
const logOut = "data:image/png;base64,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"
const userProfile = "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/2048px-Circle-icons-profile.svg.png"
const deleteIcon = "https://icon-library.com/images/red-recycle-bin-icon/red-recycle-bin-icon-18.jpg"
const editIcon = "https://toppng.com/uploads/preview/75476-2019-02-08-edit-icon-png-small-11563142463qiwrzqx0e1.png"
const taskNotFound = "https://cdn3d.iconscout.com/3d/premium/thumb/task-not-found-8417937-6672501.png?f=webp"
const brandLogo = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAWUAAACNCAMAAABYO5vSAAAAulBMVEX///8DRYCOxUsAOnoANXiaq8LK1N8AN3nFzdmMxEeiz3AAQX61wtMAQ38AMXYAP32GwTksWIzv9ukALnUAPHvj8NXS2+W32ZJOcJpHbJjl6O6Nnrg9YI+Jw0CEwTWfsMVhfqP5/Pauu83x9Pf6/fhrhah2jq7c4uoWS4PH4azn8tuYyl6+3Z2dzGfd7c2OobssWozQ5roAInCm0Xd+viTE4Key14t+lbJYd58WUYiUyFXO5bat1IIAGW2FEeZcAAALU0lEQVR4nO2df3vaNheGRWUwzEhOapeCQwK1i2HdOtJ2LWHb+/2/1otJ0gSdo582mA0919V/GnNsbsxj6ejoQIiXl5eXl5eXl5eXl5eXl5eXl5eX1yWo129QvbbfTaP6+E7UJ9dQkyRoTPy6yTfZur7dXR3qz7euocZRpzFF0ybfZNv69erNoe7+cI7lKUv06U6AfPvePZinjOvjYHAIefBbjWieMq5vA/FWdjZl4ilL9L1BUyaeMq53TZoy8ZRRNWvKxFNG9Uujpkw8ZUwNmzLxlBFBU/69bkhPWdSHW9GUP9eO6SmLgqb8oXZMT1nQ77eiKb+rH3TCQ7liSJIqDg/+Azm5I5jyTv2hQguAma5Vxw8buKB29UG8kxswZZ26VKQc/LcS9UCfj2DKOl0c5aOYsk6XRvkPYMrfT3DWC6PchimTi6MsmvJg8PEUp70syu/bMGVyYZTbMWVyWZShKf9yojNfEuXf2jFlclGUoSk7FxLZqhnKxbLXH+azWZ73e1lR85J2wfaxhg3EeiVgylcnMmVSn3I2XM+3KedBGIa0yjMFPOiM133Hy+l1Hzq7CME+VhDwcPWw7stRf38v6odsuvy2NVMm9ShnswfKAxpH7DACi2iQjHPr+7C/2EU7DMZYvIt1vx7hr/h8OxB0J1u+a8+USQ3Ko5ttQpG86bOiMCgzqyvpBDHDYzHKV2vsQwPp+DdXEsotmjJxpVzMtjzVLQ6wNFkY388zGkoQP4NO5vBDM6YMTflX0ytrQi6Ui00Qmq2/pEFudBXL+0AfLFyA15lSfisuWQ++GV1XU7KnXGx4qrztDsQfDC5ilph8aCFcQTClLJrym4EJm+ZkT3nDzRnvRLda1ygTo4gJDGRI+UerpkxcKI+4DeROJ15pMM8N3KKDL+yaUW7ZlImTLzOre7nCrAxXmkHu0DV8rRFlYMq3pzVl4kS5TO0od9KxItrM9KvBkTGzEeW/xJHyGytCTciBct/w5nsVsisNlpl58k4x8moTyq2bMnEbyWF3H4uY3ElYIp2f3JuW5MRz5NUGlL8AU/7bElEDcqH8ulhpNwMOOU+i7XS6DROOVdFUiGSeMUS+FyyuIiZJlRx5mfqE2MhbT/kMTJm4Uc7Dp0MjyunkZrj8OYhY5gt8DpdIgq7grZwG83wfsch6ebnlTxMgjn0d9JTPwJSJG+UsecSRbLEsTh6BkLvPA7+ZocWzpDwc+GX5OKGsw9CBipbyOZgyccxj3LNOFMY3S8mfS8S4cWd+AAbDkZxp0e0EdIO9Xkf5i+gXbZgycaS8psFWlaBARmcpSikBJ5eEzVM0Y62hDE35H+17O4qcKI8STRJoHYpR0YEYMIxoYnf1GsrAlP+yC9+YHDOfugOm4KmGTSrW4smRhJBSasr/AFOuuUPHWUdaXYXJDorMTOaiLaMDCYWUlKEpf6n5rpx1rDVsMNvARhn34qAvsFzFUlF+C0pcftR9U846FmUYFzHmzjEpn40pk+NRHoGRMOIGYP4SSFZRZVJQPh9TJsejXMBBGhyLgUckPt6TS0757/MxZXLE2iJAmc7AMcAxWGD3+JNShg1G2jNlckTKIAmd3oBj4HiP6RZWDiWl/OaMTJkciXKxE1iBjeESNLIeEHVk83ZMMsrAlGVlGidSc5SL0bBbzqfbiNKqWxd4siFDuRxOETtRYuHNEsrAlO/aNGXSEOVsuJnESRDStKrmkmTzkdkzfERWoiFaR4QJp3xmpkyaoDxcrHiYKmq5nikja9Bj/GU0WJgN6XDK4v+1bMqkNuXhQxLKqtsEMWRzcU+ytMrSZDszuKFRyt/OzJRJzZrPDQ3097CKMplIl/0Y5WNt7gih/KHJVnxNyZ1yNk+sSgZQyhnqzE+KglTj0JDyLcgR1ez61IicKZeJ+W0sp0y66nIMypXluZCyOFCu3fWpETlS7sfI4p4LZTLXBEq5YmSHUEaMun25UTasHzShTCYazIzKc/t6ymdgysSR8hSZTThTJhNtNGl5rpbyOZgycaJcrCwdWUPZ4JuRRvi8W0f5LEyZOFFGKlWeFaU0DPi+MgjElVMmOdfVcUVYBYGe8gkajBjJnvJUcifHIaeTcjbsLbOsKAoQWEGZZFOY9xCUYJg1lM/DlIkD5Q3qolEQL4YHY66ZDeXd7RxTNWeWGFXWnqEpE3vKPWwaEScTcKdZUiZkHag5M2ThUEn5XEyZ2FPeQhIsmCDPJmvKu2thgcqf0zl4hZLyuZgysaacw0pYxuFSE3GiTMhwkihuaFg4qqJcmXKD27hryZLyCjBgAT7IcqK8ew52r6Ub3WDuVEG5asXXV+9oOZ3sKCOVsFhlViVHyjsty1CyjxU8AOWUq65PWRCWhuc8suwog5KrTojaBalDuXpxjHJORWhyypUpX0f4+O/0sqMMpxpb2aG1KO+uC81cp8JRUspV16d9Hio8C2u2ogxrDNHdHnvVpEwKLIvEhWeAjHJlyo9F1PFZNNm1ogwPRnbtPqkuZTQnKn6oEsqVKY+eBvYhshnz5LKiDBrcsnvzwNaUkeUqsXJGQnlnysXP1UhsznhqWVEGbxvdhPcoUNFiTzkDBiWeD6dcmfJLtoVFtudtXlaUQaUFeOi/6BrUwNk3yAZd0MWaDpRy1YqvfJVtSU2aRxxXVpTBvSWnDAtaHCgDbxfnJRjlqutTfnB2fHJ6SllRBuTkjgHjOlAGO1sNKA9uP5Ll4bIAS2xq746hepSZdJwEimZdKPfFLKuBY1SmvBWcBt+SeUJZUYYTMi45Eux+cqIMqhXFutHP4i96Xt1VrfhAepbCetOTyoqyeI/sDsaXl0dIFtqBMhiniJ1IPoFfp31cHQH7DZN2fzXBijLc0Iv/fkkh9vGTUe6rn0vg2oz3A4rLZoy3OtO2ooz4ALalN0PXXzHKZbJScLsBpxNZ5V2gxyMK8NyUz59OICvKSJcXJPPZx5vNYZRXLArYWlKjlYOBIwgxDaigr0/B+qJnhZYbgxqVXU4OW2kWrLlYSAoMkdn4vhaRUT6dIaA3sIIO7H+dwJ4Ez5FK8Y3JWnScQnXzy9XdPH65nUcllxWCsg4I9zyGiGiyLQ+WwJc3FEnJgdyUgnKVXT48f9qeNVuulaAVmjFfLbrDYb5+YFLG6KD11YfG0pCn9/PNutu9KScxx4rnUjAeU1HOxO6CsWXDggZlue4Hx3KPjOKq9TJVVuWzEEQDabs4rbxV0qcVGSeoKENfV7QCO7IsKQ8tGyMeABCDWXZZRDLFSspkLn6xWptp29ZjwI2QEjFQg5Toz60Stuqhpkw6wsVG8NFwGtlSBm4nEVuBJAR8dtn8vCOLkYeXhjKYgiKFMyeRdZ1crtoJ8lNRkBFxcC02FShsDIOJS357aSiTLrgGs37QTcuhM7BBA8qILmFfBpGTTSfLOEanLjrKYEOhokvjMeVQv7zQ0kk71XsRVzrE1g0b8y1W4T0+1tVSBtvBo1Z+0tRlx8NGYxpPGxTEjJq4AH2trVl+JiPdmq2ljCRB2yg3ctpXMuSKPQ/0maa4ngTmx7NIWeP5pDjBSkofpacM663bSII6djoby3b70ZcOkqLvIouEw2lClaBZmkwU12NAGfapaqHcqJsEgr4aZVV6E7hzlcUB3by8hezrYWCO5aKz7pQH+GSPRZR3NsqJhAllkARtodxoCX+L2fCjXm5iHqb7Tg27f1Eacj4//DIa/spz0d9MEx7s2z7sFUW7mfYu3LirK1gxoUyGIAl6DuVG5lrm5XQVU0qj7aTMa9XwZP3ZZjG5XlW6ns433b7JkGsKvon/Q1624GIS+jwqQf8tWo6AsMNuRP27bmYvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL68j6P+raexrF2HlhwAAAABJRU5ErkJggg=='
const userLogo = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz1K1evWjMTfR3IMBxQxXSGV2pTaO2rAP7EzIMB4u0YwxfFL4pJ269eff6sNvuxtjI7c4&usqp=CAU"
const viewTask = "https://w7.pngwing.com/pngs/9/768/png-transparent-eye-see-viewing-icon-thumbnail.png"

export const allImages = {
  imageNotFound,
  logOut,
  userProfile,
  deleteIcon,
  editIcon,
  taskNotFound,
  brandLogo,
  userLogo,
  viewTask
};

export const buttonType = {
  primary:
    "text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-md px-5 py-2 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
};
