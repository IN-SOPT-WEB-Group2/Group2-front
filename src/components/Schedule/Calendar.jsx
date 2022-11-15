import React from 'react';
import styled from 'styled-components';

export default function Calendar() {
  return (
    <CalendarWrapper>
      <CalendarContainer>
        <thead>
          <tr className="day-title">
            <th className="mon">월</th>
            <th>화</th>
            <th>수</th>
            <th>목</th>
            <th>금</th>
            <th className="sat">토</th>
            <th className="sun">일</th>
          </tr>
        </thead>
        <tbody>
          <tr className="week">
            <td className="monday"></td>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
            <td>6</td>
          </tr>
          <tr className="week">
            <td className="monday">7</td>
            <td>8</td>
            <td>9</td>
            <td>10</td>
            <td>11</td>
            <td>12</td>
            <td>13</td>
          </tr>
          <tr className="week">
            <td className="monday">14</td>
            <td>15</td>
            <td>16</td>
            <td>17</td>
            <td>18</td>
            <td>19</td>
            <td>20</td>
          </tr>
          <tr className="week">
            <td className="monday">21</td>
            <td>22</td>
            <td>23</td>
            <td>24</td>
            <td>25</td>
            <td>26</td>
            <td>27</td>
          </tr>
          <tr className="week">
            <td className="monday">28</td>
            <td>29</td>
            <td>30</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </CalendarContainer>
    </CalendarWrapper>
  );
}

const CalendarWrapper = styled.div`
  width: 100%;
  border-radius: 5px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  background-color: var(--color-white);
  height: 327px;
  font-size: 13px;
  font-weight: 500;
  text-align: right;
  padding: 7px 11px;
`;

const CalendarContainer = styled.table`
  width: 100%;
  height: 100%;
  thead {
    width: 100%;
    padding: 7px 11px 4px 12px;
    color: #131112;
  }

  tbody {
    color: #949494;
    padding: 0 10px 7px 11px;
  }

  tr:not(:last-child) {
    border-bottom: 1px solid #e2e2e2;
  }

  td {
    padding: 1px 3px;
    width: 57px;
  }

  td:not(.monday) {
    cursor: pointer;
  }

  .day-title {
    border-bottom: 1px solid #41414d;
    padding-bottom: 4px;
    margin: 0 auto;
  }

  .day-title th {
    width: 42px;
    text-align: center;
    line-height: 135%;
    padding: 4px 0;
  }

  .mon {
    color: #949494;
  }

  .sat {
    color: #287eff;
  }

  .sun {
    color: #ed1a3b;
  }

  .monday {
    background-color: #f2f2f2;
  }
`;
