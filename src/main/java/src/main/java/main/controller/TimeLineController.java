package src.main.java.main.controller;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import src.main.java.main.Dao.PostedDaoImpl;
import src.main.java.main.entity.Posted;

@Controller
public class TimeLineController {

	@Autowired
	PostedDaoImpl postedDao;



	@RequestMapping("api/timeline/select")
	public @ResponseBody List<Posted> selectPosted(HttpServletRequest request) throws SQLException {

		String userId = request.getParameter("userId");

		try(Connection connection = DriverManager.getConnection("jdbc:mysql://localhost/SNS","root","worksap")){
			return postedDao.selectByUserId(userId, connection);


		} catch (SQLException e) {
			// TODO: handle exception
			throw e;
		}

	}
}