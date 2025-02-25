// mysqlモジュールの読み込み
import mysql from 'mysql2';
import dotenv from 'dotenv';
dotenv.config();
// 接続情報の設定
const connection = mysql.createConnection({
  host: process.env.DB_HOST,      // MySQLサーバーのホスト名
  user: process.env.DB_USERNAME,   // MySQLユーザー名
  password: process.env.DB_PASSWORD, // MySQLパスワード
  database: process.env.DATABASE // 使用するデータベース名
});

// MySQLサーバーへの接続
connection.connect((err) => {
  if (err) {
    console.error('MySQLへの接続エラー: ' + err.stack);
    return;
  }
  console.log('MySQLに接続しました。');
});

// クエリの実行例
connection.query('SELECT * FROM test_table', (error, results, fields) => {
  if (error) {
    console.error('クエリエラー: ', error);
    return;
  }
  console.log('クエリ結果: ', results);
});

// 接続を終了する
connection.end((err) => {
  if (err) {
    console.error('接続終了エラー: ', err);
    return;
  }
  console.log('MySQLとの接続を終了しました。');
});