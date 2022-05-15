// import { GetServerSideProps } from "next";
import React, { useEffect, useState } from "react";

export type AccountServerSideProps = {
    users: Array<Object>
    name: string
    id: string

};

export type AccountProps = {
    account?: Array<string> 
};

export default function Home () {
    const [accountsNames, setAccountsNames] = useState<Array<string>>([]);
    useEffect(() => {
      fetch("http://localhost:5000/account/").then((data) => data.json()).then((acc) => {
        const aux: Array<string> = [];
        acc.results.map((account: AccountServerSideProps) => aux.push(account.name));
        setAccountsNames(aux);
      })
    }, []);

    return (
        <ul>
            {
                accountsNames.map((account, key) => {
                    return <li key={key}>
                        { account }
                    </li>
                })
            }
        </ul>
    );

}

// export const getServerSideProps: GetServerSideProps = async () => {
//   const resp = await fetch("http://localhost:5000/account/");
//   const data = await resp.json();
//   const accounts = data.results.map((account: AccountServerSideProps) => account.name);

//   return {
//       props: {
//           account: accounts
//       }
//   }

// }