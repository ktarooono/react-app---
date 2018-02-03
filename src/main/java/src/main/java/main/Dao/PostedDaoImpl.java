package src.main.java.main.Dao;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;

import org.springframework.stereotype.Component;

@Component
public class PostedDaoImpl {


	private static final String CREATE_SQL = "		CREATE TABLE `posted` (\r\n" +
			"				  `posted_id` int(11) NOT NULL,\r\n" +
			"				  `statement` varchar(500) DEFAULT NULL,\r\n" +
			"				  `user` varchar(20) DEFAULT NULL,\r\n" +
			"				  `date` datetime DEFAULT NULL,\r\n" +
			"				  `picture` varchar(60) DEFAULT NULL,\r\n" +
			"				  PRIMARY KEY (`posted_id`)\r\n" +
			"				) ENGINE=InnoDB DEFAULT CHARSET=utf8;";



	/*
	 * テーブルPOSTEDをデータベースSNSに作成します。
	 * 実行結果をBooleanで返します
	 *
	 */
	public boolean createPosted() throws SQLException {

		Connection conn = DriverManager.getConnection("jdbc:mysql://localhost/SNS","root","worksap");

		int rs ;

		try(PreparedStatement ste = conn.prepareStatement(CREATE_SQL)){

			rs = ste.executeUpdate();

		}

		return (rs==0) ? false : true;



	}






}



