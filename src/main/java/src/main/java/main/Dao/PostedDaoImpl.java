package src.main.java.main.Dao;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

import org.springframework.stereotype.Component;

import src.main.java.main.entity.Posted;

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

	private static final String INSERT_SQL = "insert into posted values(?,?,?,?,?,?);";

	private static final String GET_MAX_ID = "select max(posted_id) from posted ;";

	private static final String SERECT_BY_USERID = "select * from posted where user = ?;";


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

		}catch(SQLException e) {
			return false;
		}

		return (rs==0) ? false : true;



	}

	public List<Posted> selectByUserId(String userId, Connection connection) throws SQLException {
		List<Posted> posted = null;

		try(PreparedStatement pStatement = connection.prepareStatement(SERECT_BY_USERID);) {

			pStatement.setString(1, userId);
			ResultSet resultSet = pStatement.executeQuery();

			while(resultSet.next()) {
				//posted.setPostedId(resultSet.getInt("posted_Id"));
				//statement, user, date, picture
				//posted.set
				//sentence? statement?

				posted.add(new Posted(resultSet.getInt("posted_id"),
						resultSet.getString("user"),
						resultSet.getString("title"),
						resultSet.getString("sentence"),
						resultSet.getTimestamp("date"),
						resultSet.getString("picture")));

			}

			return posted;

		} catch (SQLException e) {
			// TODO: handle exception
			throw e;
		}
	}



	public boolean setPosted(Posted post,Connection conn) throws SQLException {
		// TODO 自動生成されたメソッド・スタブ





		int rs ;
		try(PreparedStatement ste = conn.prepareStatement(INSERT_SQL)){

			int postedId = post.getPostedId();
			if(postedId==-1) {
				postedId= getMaxPostedId(conn)+1;
			}


			int index = 0;
			ste.setInt(++index,postedId);
			ste.setString(++index, post.getUser());
			ste.setString(++index,post.getTitle());
			ste.setString(++index,post.getSentence());
			ste.setTimestamp(++index, post.getDate());
			ste.setString(++index, post.getPicture());

			System.out.println("Insert postedにプリペア度ステートメント"+ste);

			rs = ste.executeUpdate();

		}

		return (rs==0) ? false : true;
	}



	private int getMaxPostedId(Connection conn) throws SQLException {
		try(PreparedStatement ste = conn.prepareStatement(GET_MAX_ID)){

			ResultSet rs = ste.executeQuery();

			rs.next();

			return rs.getInt(1);
		}

	}





}



